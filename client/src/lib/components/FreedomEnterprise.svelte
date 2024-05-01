<script>
	export let texts;
</script>

<p><br /></p>
{@html texts.releaseAnnouncement}

<!-- <script>
	import { connectToBlockchain } from '$lib/helpers';
	import hashJs from 'hash.js';
	import { onMount } from 'svelte';
	import { ethers } from 'ethers';
	import { baseURLScan, FT, fTABI, FC, fCABI, FP, fPABI, vPeriodMinLength } from '../../constants';
	import FeedbackToVisitor from './FeedbackToVisitor.svelte';
	export let texts;
	let visitorHasBrowserWallet;
	let provider;
	let contract;
	let publicWalletAddressOfVisitor;
	let dataLoaded;
	let walletBalance;
	let visitorInformed = true;
	let taskDescription = '';
	let solutionProposal = '';
	let fCContract;
	let fTContract;
	let amount;
	let taskFundingAmount;
	let searchTerm = '';
	let taskCounter;
	let fundingCounter;
	let solutionCounter;
	let enrichedSolutionProposals = [];
	let tasksCreatedByYou = [];
	let fundingsCreatedByYou = [];
	let solutionProposalsProvidedByYou = [];
	let filteredTasks = [];
	let enrichedTask;
	let enrichedTasks = [];
	let showTaskCreation = false;
	let showTaskExplorer = false;
	let showSolutionProposals = false;
	let typingActive = false;
	let showStatistics = false;
	let claimableReward = 0;
	let visitorWithMobile = false;

	const onKeyDown = () => {
		filteredTasks = [...enrichedTasks];
		if (typingActive === false) {
			typingActive = true;

			setTimeout(() => {
				const currentFilterResult = [];
				for (const asset of filteredTasks) {
					const stringifiedasset = JSON.stringify(asset);
					if (stringifiedasset.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
						currentFilterResult.push(asset);
					}
				}

				filteredTasks = [...currentFilterResult];
				typingActive = false;
			}, 1000 * 1);
		}
	};

	onMount(async () => {
		if (
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
		) {
			visitorWithMobile = true;
		}
		if (typeof window.ethereum === 'undefined') {
			visitorHasBrowserWallet = false;
		} else {
			visitorHasBrowserWallet = true;

			const connectionData = await connectToBlockchain();
			provider = connectionData.provider;
			publicWalletAddressOfVisitor = connectionData.publicWalletAddressOfVisitor;
			const signer = await provider.getSigner();
			contract = new ethers.Contract(FP, fPABI, signer);
			fCContract = new ethers.Contract(FC, fCABI, signer);
			fTContract = new ethers.Contract(FT, fTABI, signer);
			taskCounter = await contract.taskCounter();
			fundingCounter = await contract.fundingCounter();
			solutionCounter = await contract.solutionCounter();
			let counter = 0;

			while (counter < taskCounter) {
				counter++;
				const rawTask = await contract.tasks(counter);
				const task = { from: rawTask[0], text: rawTask[1] };
				enrichedTask = task;
				enrichedTask.id = counter;
				enrichedTask.funding = ethers.formatEther(
					await contract.getFundingAmountOf(enrichedTask.id)
				);
				const raw = await contract.getSolutionProposalIDs(enrichedTask.id);
				if (raw == '') {
					enrichedTask.solutionProposalIDs = [];
				} else {
					enrichedTask.solutionProposalIDs = raw.toString().split(',');
				}

				enrichedTask.hash = '0x' + hashJs.sha256().update(enrichedTask.text).digest('hex');
				if (await fTContract.isRegistered(enrichedTask.hash)) {
					enrichedTask.hash = '0x' + hashJs.sha256().update(enrichedTask.text).digest('hex');
					enrichedTask.registered = true;
					const assetRaw = await fTContract.assets(enrichedTask.hash);
					enrichedTask.upVoteScore = ethers.formatEther(assetRaw[0]);
					enrichedTask.downVoteScore = ethers.formatEther(assetRaw[1]);
					enrichedTask.reconciliationFrom = assetRaw[2];
					enrichedTask.reconciled = assetRaw[3];
				} else {
					enrichedTask.registered = false;
				}

				enrichedTasks.push(enrichedTask);
			}
			claimableReward = await contract.getClaimableReward(publicWalletAddressOfVisitor);
			dataLoaded = true;
		}
	});

	async function getSolutionProposals(ids) {
		let counter = 0;
		while (counter < ids.length) {
			counter++;
			const raw = await contract.solutions(counter);
			const enrichedSolutionProposal = {
				id: counter,
				from: raw[0],
				evidence: raw[1],
				score: raw[2],
				claimed: raw[3]
			};
			enrichedSolutionProposals.push(enrichedSolutionProposal);
		}
	}
	// 	const descriptionInMarkdown = "## Hello Free World ### Please provide an enterprise system that's fully peer to peer, fair and legal."
	// const evidence = "https://github.com/..."
	// const amount = 9

	async function createTask() {
		await contract.createTask(taskDescription);
		visitorInformed = false;
		taskDescription = '';
	}

	async function fundTask(taskID) {
		try {
			const parsedAmount = ethers.parseEther(taskFundingAmount.toString());
			const balance = await provider.getBalance(FC);
			const price = await fCContract.getBuyPrice(balance);
			const cost = price * BigInt(taskFundingAmount);
			console.log(
				`funding task ${taskID} with amount: ${parsedAmount} FC at price ${price} paying in total: ${cost} ETH`
			);
			await contract.fundTask(taskID, parsedAmount, { value: cost });
		} catch (error) {
			console.log(error);
		}

		taskFundingAmount = undefined;
		visitorInformed = false;
	}
	async function provideSolution(taskCounter) {
		console.log(taskCounter);
		await contract.provideSolution(taskCounter, solutionProposal);
		visitorInformed = false;
		solutionProposal = '';
	}
	async function appreciateSolution(id, amount) {
		const maxAppreciationPotential = await contract.getMaxAppreciationPotential(
			taskCounter,
			publicWalletAddressOfVisitor
		);
		alert(maxAppreciationPotential);
		await contract.appreciateSolution(BigInt(id), BigInt(ethers.parseEther(amount.toString())));
		visitorInformed = false;
	}
	async function claimRewards() {
		await contract.claimRewards();
	}
	async function register(text) {
		const hash = '0x' + hashJs.sha256().update(text).digest('hex');
		alert(`registering ${hash} for ${text}`);
		await fTContract.addAsset(hash, vPeriodMinLength);
	}
	async function cleanDesk() {
		visitorInformed = true;
	}

	async function vote(freedomBetsAmount, description, up) {
		const amountToBeBoughtInWei = ethers.parseEther(freedomBetsAmount.toString());
		const signer = await provider.getSigner();
		const balance = await provider.getBalance(FC);
		const price = await fCContract.getBuyPrice(balance);
		const cost = BigInt(freedomBetsAmount) * price;
		const ethInWallet = BigInt(await provider.getBalance(publicWalletAddressOfVisitor));
		const hash = '0x' + hashJs.sha256().update(description).digest('hex');
		console.log(`${hash} ${amountToBeBoughtInWei} ${price} ${cost}`);
		try {
			const estimatedGas = await fTContract.appreciateAsset.estimateGas(
				hash,
				amountToBeBoughtInWei,
				{
					value: BigInt(cost)
				}
			);
			const estimatedGasCost = estimatedGas * (await provider.getFeeData()).gasPrice;
			if (ethInWallet < cost + BigInt(estimatedGasCost)) {
				throw new Error('you might enter a smaller amount');
			} else {
				if (up) {
					console.log(hash, amountToBeBoughtInWei, price);
					await fTContract.appreciateAsset(hash, amountToBeBoughtInWei, {
						value: BigInt(cost)
					});
				} else {
					await fTContract.depreciateAsset(hash, amountToBeBoughtInWei, {
						value: BigInt(cost)
					});
				}
				visitorInformed = false;
			}
		} catch (error) {
			alert(error);
		}
	}
	async function showSpecificSolutionProposals(ids) {
		if (ids.length === 0) {
			alert(`there are no solution proposals yet`);
		} else {
			if (showSolutionProposals === false) {
				await getSolutionProposals(ids);
				showSolutionProposals = true;
			} else {
				showSolutionProposals = false;
			}
		}
	}
	async function collectStatistics() {
		if (showStatistics === false) {
			walletBalance = ethers.formatEther(await fCContract.balanceOf(publicWalletAddressOfVisitor));
			tasksCreatedByYou = await contract.getTaskIDsCreatedBySender();
			fundingsCreatedByYou = await contract.getFundingIDsFundedBySender();
			solutionProposalsProvidedByYou = await contract.getSolutionIDsProvidedBySender();

			showStatistics = true;
		} else {
			showStatistics = false;
		}
	}
</script>

{@html texts.enterprise1}
<p><br /></p>
{#if visitorInformed}
	{#if dataLoaded}
		{#if claimableReward > 0}
			<p><br /></p>
			<button class="button" on:click={() => claimRewards()}> Claim Your Rewards </button>
		{/if}
		<p><br /></p>
		{#if !showTaskCreation}
			<button class="button" on:click={() => (showTaskCreation = !showTaskCreation)}>
				Create Task
			</button>
			<p><br /></p>
		{:else}
			<p><br /></p>

			<input
				bind:value={taskDescription}
				class="myInputField"
				type="text"
				placeholder="... describe the task in great detail ..."
			/>
			{#if taskDescription != ''}
				<p><br /></p>
				<button class="inside" on:click={() => createTask()}>Save Task</button>
			{/if}
		{/if}
		<p><br /></p>
		<button class="button" on:click={() => (showTaskExplorer = !showTaskExplorer)}>
			Solve Task
		</button>
		<p><br /></p>
		{#if showTaskExplorer}
			{#each enrichedTasks as enrichedTask}
				<div class="card">
					{enrichedTask.text}
					{#if enrichedTask.funding > 0}
						<p><br /></p>
						Current Funding: {enrichedTask.funding} FC
					{/if}
					<p><br /></p>
					<input
						bind:value={taskFundingAmount}
						class="myInputField"
						type="number"
						placeholder="... enter task funding amount ..."
						min="1"
						max="369"
						step="1"
					/>
					{#if taskFundingAmount > 0}
						<p><br /></p>
						<button class="inside" on:click={() => fundTask(enrichedTask.id)}>Fund Task</button>
					{/if}
					<p><br /></p>
					<input
						bind:value={solutionProposal}
						class="myInputField"
						type="text"
						placeholder="... describe or link your solution ..."
						min="1"
						max="369"
						step="1"
					/>
					{#if solutionProposal}
						<p><br /></p>
						<button class="inside" on:click={() => provideSolution(enrichedTask.id)}
							>Save Solution</button
						>
					{/if}
					<p><br /></p>
					<button
						class="inside"
						on:click={async () =>
							await showSpecificSolutionProposals(enrichedTask.solutionProposalIDs)}
						>Show Solution Proposals</button
					>
					{#if showSolutionProposals}
						<p><br /></p>
						{#each enrichedSolutionProposals as specificSolutionProposal}
							<div class="card">
								From: {specificSolutionProposal.from}
								<p><br /></p>
								Evidence: {specificSolutionProposal.evidence}
								<p><br /></p>
								Score: {ethers.formatEther(specificSolutionProposal.score)}
								<p><br /></p>
								Claimed: {ethers.formatEther(specificSolutionProposal.claimed)}
								<p><br /></p>
								<input
									bind:value={specificSolutionProposal.appreciateWithAmount}
									class="myInputField"
									type="number"
									placeholder="... appreciate solution with amount ..."
									min="1"
									max="369"
									step="1"
								/>
								{#if specificSolutionProposal.appreciateWithAmount > 0}
									<p><br /></p>
									<button
										class="inside"
										on:click={() =>
											appreciateSolution(
												specificSolutionProposal.id,
												specificSolutionProposal.appreciateWithAmount
											)}>Appreciate Solution</button
									>
								{/if}
							</div>
						{/each}
					{/if}
					{#if enrichedTask.registered}
						<hr />
						Freedom Bets Data
						<p><br /></p>
						<span class="score-up">Ups: {enrichedTask.upVoteScore} </span> vs.
						<span class="score-down">Downs: {enrichedTask.downVoteScore} </span>
						<p><br /></p>
						{#if !enrichedTask.reconciled}
							<input
								bind:value={enrichedTask.freedomBetsAmount}
								class="myInputField"
								type="number"
								placeholder="... enter investment amount ..."
								min="1"
								max="369"
								step="1"
							/>
							{#if enrichedTask.freedomBetsAmount > 0}
								<p><br /></p>
								<button
									class="inside"
									on:click={() => vote(enrichedTask.freedomBetsAmount, enrichedTask.text, true)}
									>Appreciate</button
								>
								<p><br /></p>
								<button
									class="inside"
									on:click={() => vote(enrichedTask.freedomBetsAmount, enrichedTask.text, false)}
									>Depreciate</button
								>
								<p><br /></p>
							{/if}
							{#if enrichedTask.reconciliationFrom < new Date().getTime() / 1000 && amount == undefined && (enrichedTask.upVoteScore > 0 || enrichedTask.downVoteScore > 0)}
								<p><br /></p>
								<button class="inside" on:click={() => fTContract.reconcile(enrichedTask.hash)}
									>Reconcile</button
								>
							{/if}
						{/if}
					{:else}
						<p><br /></p>
						<button class="inside" on:click={() => register(enrichedTask.text)}
							>Register For Freedom Bets</button
						>
					{/if}
				</div>
			{/each}
		{/if}

		<p><br /></p>
		<button class="button" on:click={() => collectStatistics()}> Show Statistics </button>
		<p><br /></p>
		{#if showStatistics}
			<div class="tableDiv">
				<table>
					<tr>
						<th>Key</th>
						<th>Value</th>
					</tr>
					<tr>
						<td>Connected Wallet</td>
						<td class="longInfo">{publicWalletAddressOfVisitor}</td>
					</tr>
					<tr>
						<td>Wallet Balance</td>
						<td
							>{walletBalance}
							<a href="{baseURLScan}token/{FC}/holders" target="_blank">Geo Cash</a></td
						>
					</tr>
					<tr>
						<td>Tasks Created By You</td>
						<td>{tasksCreatedByYou.length}</td>
					</tr>
					<tr>
						<td>Fundings Funded By You</td>
						<td>{fundingsCreatedByYou.length}</td>
					</tr>
					<tr>
						<td>Solution Proposals Provided By You</td>
						<td>{solutionProposalsProvidedByYou.length}</td>
					</tr>
				</table>
			</div>
		{/if}
	{:else if !visitorHasBrowserWallet && !visitorWithMobile}
		Please install a browserwallet which you trust like
		<a href="https://metamask.io" target="_blank">metamask.io</a>
		or use the integrated browserwallet in the
		<a href="https://brave.com" target="_blank">brave.com</a> browser and come again.
	{:else if !visitorHasBrowserWallet && visitorWithMobile}
		This is a distributed app you shall visit this page with your
		<a href="https://metamask.io" target="_blank">Metamask Built In Browser</a>
	{/if}
{:else}
	<FeedbackToVisitor {texts} on:clickedOK={() => cleanDesk()}></FeedbackToVisitor>
{/if}

<p><br /></p>

<style>
	.tableDiv {
		overflow-x: scroll;
	}
	table {
		font-family: arial, sans-serif;
		border-collapse: collapse;
		width: 100%;
	}

	td,
	th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}

	tr:nth-child(even) {
		background-color: #dddddd;
	}
	.score-up {
		background-color: green;
		color: white;
		min-width: 80px;
		width: 80px;
		padding-left: 18px;
		padding-right: 18px;
	}
	.score-down {
		background-color: red;
		color: white;
		padding-left: 9px;
		padding-right: 9px;
	}

	.card {
		margin-bottom: 9vh;
		border: 1px solid black;
		text-align: center;
		padding: 8px;
		overflow-x: scroll;
	}
</style> -->
