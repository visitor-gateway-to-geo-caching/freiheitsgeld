import { ethers } from 'ethers';
import { fTABI, fCABI, FC, targetChainId, FP } from '../constants';

export const isEthereumWalletAddress = (address) => {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
        // check if it has the basic requirements of an address
        return false;
    } else if (
        /^(0x)?[0-9a-f]{40}$/.test(address) ||
        /^(0x)?[0-9A-F]{40}$/.test(address)
    ) {
        // If it's all small caps or all all caps, return true
        return true;
    } else {
        throw new Error(
            `I guess it's fine toLowerCase the input as a client`
        );
    }
};

export const getInfoMessageToBeSigned = (assetURL, description) => {
    let infoMessageToBeSigned =
        `This signature ensures that only invited wallets can upload content, invite friends etc. in order to foster high quality content right from the start.`;
    infoMessageToBeSigned = `${infoMessageToBeSigned} Data: ${assetURL} ${description}`

    return infoMessageToBeSigned
}

export const getPublicWalletAddressFromSignature = async (signature, dataThatWasSigned, web3) => {
    const publicWalletAddress = await web3.eth.personal.ecRecover(
        dataThatWasSigned,
        signature
    );

    return publicWalletAddress
}

export const getFirstLinkInText = (text) => {

    let link = ""
    let indexOfFirstLinkStart = text.indexOf("https://")

    if (indexOfFirstLinkStart === -1) {

        // no https:// link in text // we might add ipfs:// links handling in the future

    } else {

        let restText = text.substr(indexOfFirstLinkStart, text.length)
        let indexOfFirstLinkEnd = restText.indexOf(" ") - 1

        if (indexOfFirstLinkEnd === -2) { // if end of link equals end of text
            link = restText
        } else {
            link = restText.substr(0, indexOfFirstLinkEnd)
        }
    }

    return link
}


export const replaceContentToShowClickableLinks = (content) => {

    if (content !== undefined && content.length >= 9 && content.indexOf('http:') === -1) {
        var exp_match =
            /(\b(https?|):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi
        var element_content = content.replace(
            exp_match,
            `<a class="linkInText" href='$1' target="_blank">$1</a>`
        );
        var new_exp_match = /(^|[^\/])(www\.[\S]+(\b|$))/gim
        var new_content = element_content.replace(
            new_exp_match,
            '$1<a class="linkInText" target="_blank" href="http://$2">$2</a>'
        )
        return new_content
    }

    return content

}

export const isBefore = (input1, input2) => {
    const date1 = getDateFromString(input1)
    const date2 = getDateFromString(input2)

    return date1 < date2
}


export const getDateFromString = (input) => {
    const year = Number(input.substr(0, 4))
    const month = Number(input.substr(5, 2)) - 1
    const dayte = Number(input.substr(8, 2))

    return new Date(Date.UTC(year, month, dayte, 0, 0, 0, 0))
}


export const padTo2Digits = (num) => {
    return num.toString().padStart(2, "0")
}


export const getFormattedUTCDateFromDate = (date) => {
    return (
        [
            //   date.getFullYear(),
            date.getUTCFullYear(),
            padTo2Digits(date.getUTCMonth() + 1),
            padTo2Digits(date.getUTCDate()),
        ].join("-") +
        " " +
        [
            padTo2Digits(date.getUTCHours()),
            padTo2Digits(date.getUTCMinutes()),
            padTo2Digits(date.getUTCSeconds()),
        ].join(":")
    )
}


export const getLastMomentOfTodayFromString = (input) => {
    const part1 = input.split(" ")[0]
    const part2 = "23:59:59"

    return `${part1} ${part2}`
}


export const getLastMomentOfTodayFromDate = (date) => {
    const formattedUTCDateFromDate = getFormattedUTCDateFromDate(date)
    return getLastMomentOfTodayFromString(formattedUTCDateFromDate)
}

export const getDateOfLastMomentOfTodayFromDate = (date) => {
    const formattedUTCDateFromDate = getFormattedUTCDateFromDate(date)
    return getLastMomentOfTodayFromString(formattedUTCDateFromDate)
}

export const addOneDay = (input) => {

    const year = Number(input.substr(0, 4))
    const month = Number(input.substr(5, 2)) - 1
    const dayte = Number(input.substr(8, 2))

    const currentDate = new Date(Date.UTC(year, month, dayte))

    const oneDayLaterTimestamp = currentDate.setDate(currentDate.getDate() + 1)

    const result = getFormattedUTCDateFromDate(new Date(oneDayLaterTimestamp))

    return result
}

export const getTextWithoutLink = (text, link) => {
    const startIndex = text.indexOf(link);
    const endIndex = startIndex + link.length;
    const part1 = text.substr(0, text.indexOf(link));
    const part2 = text.substr(endIndex, text.length);
    return `${part1}${part2}`;
}

export const connectToBlockchain = async () => {
    let connectionData = {
        provider: {},
        contract: {},
        publicWalletAddressOfVisitor: ""
    }
    try {
        const chainId = await window.ethereum.request({
            method: 'eth_chainId'
        });

        if (chainId !== targetChainId) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: targetChainId }]
                });
            } catch (error) {
                await window.ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: targetChainId,
                            chainName: 'Polygon Mainnet',
                            rpcUrls: ['https://polygon.drpc.org'],
                            nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
                            blockExplorerUrls: ['https://polygonscan.com']
                        }
                    ]
                });
            }
        }
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts'
        });

        connectionData.provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await connectionData.provider.getSigner();
        connectionData.contract = new ethers.Contract(FC, fCABI, signer);
        connectionData.fBContract = new ethers.Contract(FP, fTABI, signer);
        connectionData.publicWalletAddressOfVisitor = accounts[0];
        window.ethereum.on('chainChanged', handleChainChanged);
        connectionData.visitorIsConnectedViaBrowserWallet = true;
    } catch (error) {
        alert(error.message);
    }
    window.ethereum.on('accountsChanged', function (accounts) {
        alert(`the account has been changed via Metamask. So I reload.`);
        window.location.reload();
    });

    return connectionData
}
export const handleChainChanged = (chainId) => {
    // await connectToBlockchain()
    alert(`the chain has been changed via Metamask. So I reload.`);
    window.location.reload();
}

export const getPOIsFromAssets = (assets) => {
    const pois = []
    for (const asset of assets) {
        if (asset.lat !== undefined && asset.lon !== undefined) {
            pois.push({ lat: asset.lat, lon: asset.lon, text: asset.text })
        }
    }
    return pois
}

export const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}

export const getRandomIndex = (min, max, alreadyTaken) => {
    let candidate;
    while (true) {
        candidate = Math.round(Math.random() * (max - min) + min);
        if (alreadyTaken.indexOf(candidate) === -1) {
            return candidate;
        }
    }
}

export const getRandomEntries = (entries, amountOfRandomEntries) => {
    const randomIndexes = [];
    const randomEntries = [];
    while (randomEntries.length < amountOfRandomEntries) {
        const randomIndex = getRandomIndex(0, entries.length - 1, randomIndexes);
        randomIndexes.push(randomIndex);
        randomEntries.push(entries[randomIndex]);
    }
    return randomEntries;
}


export const germanTexts = {
    title: "Weltfriede, Freiheit, Freundschaft",
    whatWeDo: ' <p><br></p>Unsere Währungen sind <a href="https://www.geckoterminal.com/polygon_pos/pools/0x2bc882c913655648c582aabde5aed2acd4e3ad7b" target="_blank">Freiheit</a>, <a href="https://www.geckoterminal.com/polygon_pos/pools/0x16e579221bb5d27be335bba6966f87f013894226" target="_blank">Friede</a> und <a href="https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c" target="_blank">Geo Cash</a>. ',
    watchMoreVideos: "Mehr Videos",
    contactFriendsOfSatoshi: 'Sobald Du einen solchen Freiheitsgeldbeutel gefunden oder generiert hast, kannst Du dessen <b>öffentliche</b> Addresse und ein entsprechendes Video an <a href="https://t.me/FriendsOfSatoshi_bot" target="_blank">FriendsOfSatoshi</a> senden.',
    problems: "Probleme",
    solutions: "Lösungen",
    heisenberg: ['Wir holen uns unsere Freiheit zurück.', 'Unsere Worte sind mächtiger als die Worte der Mächtigen.', 'Wir trennen Geld von Staat.', '<a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> hilft jedem Einzelnen frei zu sein.'],
    exploreDetails: 'Erkunde Details über Geo Cash',
    currency: "Währung",
    totalSupplies: 'Gesamtmengen',
    totalSupply: 'Gesamtmenge',
    utility: 'Sinn & Zweck',
    utilityDescription: 'Wir finanzieren Freiheit.',
    liquidity: 'Liquidität',
    liquidityDescription: '100 Prozent der <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> Liquidität liegt zu Beginn im <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Smart Contract</a> selbst.',
    educateYourself: 'Bitte lies den <a href="https://github.com/geo-logs/freiheit/blob/main/README.md" target="_blank">Code</a> aufmerksam und erzähle Deinen Freunden davon.',
    generatePaperWallet: "Generiere ein Paperwallet",
    showExchanges: "Zeige Tauschbörsen",
    buyAndSellFC: "Kaufe und Verkaufe Freiheitsgeld",
    playFreedomTribunal: "Spiele Freiheits Tribunal",
    showPhilosophy: "Philosophie",
    philosophy: "Philosophie & Kontakt",
    philosophy11: `<a href="https://otherparty.co.uk" target="_blank">otherparty.co.uk</a> und <a href="https://gitcoin.co" target="_blank">gitcoin</a> sind vielleicht auch sehr sehr geil.`,
    philosophy14: "Freunde",
    philosophy15: '<a href="https://rumble.com/c/c-5722872/videos" target="_blank">Rumble.com</a> ist eine meinungsfreiheitliche Alternative gegenüber youtube.',
    philosophy17: 'Wir erkunden und gestalten Architekturen der Freiheit. <p><br></p>Wir behandeln jeden Einzelnen so wie wir von diesem behandelt werden. <p><br></p> Wir spielen für Friede, Freiheit und Gerechtigkeit.',
    philosophy22: "Kontakt",
    philosophy23: `<a href="https://github.com/moniquebaumann/friends-of-satoshi" target="_blank">Unsere</a> Projekte sind <a href="https://github.com/FreiheitsGeld/freiheitsgeld/" target="_blank"> Open Source</a>. <p><br>Wir glauben nicht an zentrale Verantwortlichkeiten. Daher reagieren wir selten oder gar nicht auf E-Mails an <a href="mailto:monique@freedomcash.org">monique@freedomcash.org</a>. <p><br>Falls Du eine Schwachstelle entdeckst, kannst du eine Fehlermeldung via <a href="https://github.com/FreiheitsGeld/freiheitsgeld/issues/new" target="_blank">GitHub</a> beisteuern. Zusätzlich kannst Du auch auch die passende Lösung per Pull Request bereitstellen.` ,
    impressumLong: `Es handelt sich bei unseren Projekten nicht um gewerbliche Projekte sondern um Open Source Bildungsprojekte ohne Gewinnerzielungsabsicht unsererseits. Wir sind bereits frei. <p><br></p>Aus diesen Gründen verzichten wir auf ein <a href="https://www.youtube.com/watch?v=I6jaruQuBhM" target="_blank"> klassisches Impressum</a>. <p><br></p><h6> Keine Abmahnung ohne Kontakt!</h6> <br>
    Sollte der Inhalt fremde Rechte Dritter oder gesetzliche Bestimmungen verletzen, kontaktieren Sie uns ohne Kostennote. Wir garantieren, dass zurecht beanstandete Inhalte unverzüglich entfernt werden, ohne dass von Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich ist. Dennoch von Ihnen ohne vorherige Kontaktaufnahme ausgelöste Kosten werden im Sinne der Schadensminderungspflicht zurückgewiesen und gegebenenfalls wird Gegenklage wegen Verletzung vorgenannter Bestimmungen eingereicht.`,
    wallets: "",
    wallets2: "Schnellkurs",
    wallets3: "Online Geldbeutel",
    wallets4: "So wie wir einen Browser nutzen, um im Internet zu surfen, nutzen wir Online Wallets, um mit Blockchains zu interagieren.",
    wallets5: "Für kleine Geldmengen, sowie für die interaktion mit Blockchains nutzen wir Online Wallets wie z.B.",
    wallets6: "und",
    wallets7: 'Für große Geldmengen, sowie für die Kooperation von Mensch zu Mensch ohne totalitäre Überwachungsfunktionäre im Hintergrund bevorzugen wir Offline Wallets, welche wir auch Paperwallets nennen.',
    wallets8: "Offline Geldbeutel",
    wallets9: 'Eine der besten Möglichkeiten Freiheitsgeld aufzubewahren sind self hosted (nur Du hast den Privat Schlüssel), cold (nicht mit dem Internet verbundene) Paperwallets.',
    wallets10: "Den Open Source Code unseres Paperwallet Generators findest Du",
    wallets11: "hier",
    treasuries: "Schatzkammern der Freiheit",
    treasuries2: '',
    exchanges: 'Märkte der Freiheit',
    exchanges1: 'Wir wollen sein ein freies Volk von freien Bürgern. In keiner Not uns trennen und Gefahr.',
    exchanges2: 'Hier entstehen Märkte der Freiheit für Nahrungsmittel, Silber, Gold und Geo Cash. <p><br /></p>',
    enterprise: 'Unternehmen der Freiheit',
    enterprise1: 'Erledige Aufgaben, die Du liebst. Delegiere den Rest. <p><br /></p> Wir vermeiden Korruption durch Zusammenarbeit von Mensch zu Mensch ohne korrupte Funktionäre dazwischen.',
    logBook: '',
    quote: 'Ich kaufe und verkaufe <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a>, Silber und Gold. <a href="https://github.com/moniquebaumann" target="_blank"><i>Monique Baumann</i></a>',
    switchToOnChainMode: "Aktiviere On Chain Modus",
    studySmartContract: 'Bitte studiere den <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Smart Contract</a> und experimentiere zunächst mit kleinen Beträgen.',
    buyPr: 'Um <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> zu kaufen, brauchst Du Matic auf der Polygon POS Blockchain.',
    buy: 'Kaufe Geo Cash',
    sell: 'Verkaufe Geo Cash',
    transfer: `Du kannst Matic vom Ethereum Mainnet auf die Polygon Blockchain transferieren per <a href="https://portal.polygon.technology/bridge" target="_blank">portal.polygon.technology/bridge</a>.`,
    smallerAmount: `probiere es vielleicht mit einem kleineren Betrag`,
    congrats: `Glückwunsch. Jetzt braucht es ein paar Sekunden Geduld. <p><br></p>Du kannst Deine Interaktionen mit dem <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">smart contract</a> auf der polygonscan.com Blockchain <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">hier</a> nachvollziehen.`,
    reload: `Lade die Seite nach etwa einer Minute neu, um den aktuellen Stand auf der Blockchain zu erfahren.`,
    loading: `... Daten werden von der Polygon Blockchain geladen ... <p><br></p>Dies kann ca. 9 Sekunden dauern. <p><br></p>Falls Du ungeduldig bist, kannst Du alles auch per <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Smart Contract</a> direkt beobachten.`,
    freedomEnterprise: "Erkunde die Freiheitsfirma"
}


