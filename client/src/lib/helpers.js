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
    title: "Freiheit",
    whatWeDo: 'Wir beenden staatlich organisierte Kriminalität. <p><br></p>Wir trennen Geld von Staatskriminellen so wie Religion von Staat getrennt wurde. <p><br></p>Unsere Währungen sind <a href="https://www.geckoterminal.com/polygon_pos/pools/0x2bc882c913655648c582aabde5aed2acd4e3ad7b" target="_blank">Freiheit</a>, <a href="https://www.geckoterminal.com/polygon_pos/pools/0x16e579221bb5d27be335bba6966f87f013894226" target="_blank">Friede</a> und <a href="https://www.geckoterminal.com/polygon_pos/pools/0x0296f6ea1f02083b99ae59200d00f5257473f17c" target="_blank">Geo Cash</a>. ',
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
    philosophy7: 'Die Straftaten der als Demokratien getarnten "Regierungen" scheinen gefährlicher für die Menschheit als die Straftaten, welche durch die Freiheit und die Privatheit des Geldes scheinbar erleichtert werden. Young global cheaters haben versucht unsere Freiheit und unseren Frieden durch Zensur, Propaganda und korruptes Staatsgeld namens CBDCs zu zerstören.',
    philosophy11: `Bitte helft uns zusätzlich <a href="https://otherparty.co.uk" target="_blank">otherparty.co.uk</a> und <a href="https://gitcoin.co" target="_blank">gitcoin</a> zu stärken.`,
    philosophy14: "Freunde",
    philosophy15: '<a href="https://rumble.com/c/c-5722872/videos" target="_blank">Rumble.com</a> ist die meinungsfreiheitliche Alternative gegenüber youtube. <p><br></p> Bitte kopiere Deine Videos von youtube zu <a href="https://rumble.com/c/c-5722872/videos" target="_blank">rumble.com</a> um die Meinungsfreiheit und damit die stetige Erkundung der Wahrheit zu fördern.',
    philosophy17: 'Wir erkunden und gestalten Architekturen der Freiheit. <p><br></p>Wir behandeln jeden Einzelnen so wie wir von diesem behandelt werden. <p><br></p> Wir spielen für Friede, Freiheit und Gerechtigkeit.',
    philosophy21: 'Wir helfen jedem frei zu sein, der uns hilft frei zu sein.',
    philosophy22: "Kontakt",
    philosophy23: `<a href="https://github.com/moniquebaumann/friends-of-satoshi" target="_blank">Unsere</a> Projekte sind <a href="https://github.com/FreiheitsGeld/freiheitsgeld/" target="_blank"> Open Source</a>. <p><br>Wir glauben nicht an zentrale Verantwortlichkeiten. Daher reagieren wir selten oder gar nicht auf E-Mails an <a href="mailto:monique@freedomcash.org">monique@freedomcash.org</a>. <p><br>Falls Du eine Schwachstelle entdeckst, kannst du eine Fehlermeldung via <a href="https://github.com/FreiheitsGeld/freiheitsgeld/issues/new" target="_blank">GitHub</a> beisteuern. Zusätzlich kannst Du auch auch die passende Lösung per Pull Request bereitstellen.` ,
    impressumLong: `Es handelt sich bei unseren Projekten nicht um gewerbliche Projekte sondern um Open Source Bildungsprojekte ohne Gewinnerzielungsabsicht unsererseits. Wir sind bereits frei. <p><br></p>Aus diesen Gründen verzichten wir auf ein <a href="https://www.youtube.com/watch?v=I6jaruQuBhM" target="_blank"> klassisches Impressum</a>. <p><br></p><h6> Keine Abmahnung ohne Kontakt!</h6> <br>
    Sollte der Inhalt fremde Rechte Dritter oder gesetzliche Bestimmungen verletzen, kontaktieren Sie uns ohne Kostennote. Wir garantieren, dass zurecht beanstandete Inhalte unverzüglich entfernt werden, ohne dass von Ihrer Seite die Einschaltung eines Rechtsbeistandes erforderlich ist. Dennoch von Ihnen ohne vorherige Kontaktaufnahme ausgelöste Kosten werden im Sinne der Schadensminderungspflicht zurückgewiesen und gegebenenfalls wird Gegenklage wegen Verletzung vorgenannter Bestimmungen eingereicht.`,
    wallets: "Geldbeutel der Freiheit",
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
    treasuries2: 'Erschaffe <a href="https://rumble.com/c/c-5722872/videos" target="_blank">Schätze der Freiheit</a> und mach die Erde zu einem freien Planeten. <p><br></p> Generiere und platziere <a href="https://freiheitsgeld.de/freedomWallets" target="_blank">Freiheitsgeldbeutel</a> an beliebigen schönen Orten. <p><br></p>Speichere Hinweis Videos bei <a href="https://rumble.com" target="_blank">rumble.com</a>.',
    exchanges: 'Märkte der Freiheit',
    exchanges1: 'Wir wollen sein ein freies Volk von freien Bürgern. In keiner Not uns trennen und Gefahr.',
    exchanges2: 'Hier entstehen Märkte der Freiheit für Nahrungsmittel, Silber, Gold und Geo Cash. <p><br /></p>',
    enterprise: 'Unternehmen der Freiheit',
    enterprise1: 'Erledige Aufgaben, die Du liebst. Delegiere den Rest. <p><br /></p> Wir vermeiden Korruption durch Zusammenarbeit von Mensch zu Mensch ohne korrupte Funktionäre dazwischen.',
    logBook: 'Spuren der Freiheit',
    quote: 'Ich kaufe und verkaufe <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a>, Silber und Gold. <a href="https://github.com/moniquebaumann" target="_blank"><i>Monique Baumann</i></a>',
    switchToOnChainMode: "Aktiviere On Chain Modus",
    studySmartContract: 'Bitte studiere den <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Smart Contract</a> und experimentiere zunächst mit kleinen Beträgen.',
    useBIB: 'Da es sich bei dieser Seite um eine verteilte Web App (dApp) handelt, besuche diese Seite bitte mit dem in der <a href="https://metamask.io" target="_blank">Metamask App</a> eingebauten Browser.',
    useBW: '<p><br></p>Bitte installiere ein vertrauenswürdiges Browserwallet wie beispielsweise <a href="https://metamask.io" target="_blank">metamask.io</a> oder nutze das im <a href="https://brave.com" target="_blank">brave.com</a> Browser eingebaute Wallet.',
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


const frenchTexts = {
    title: "Liberté",
    whatWeDo: '<a href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459#balances" target="_blank">Nous</a> finançons <a href="https://rumble.com/c/c-5722872/videos" target="_blank">la liberté</a>.',
    contactFriendsOfSatoshi: `Une fois que vous avez trouvé ou généré un <a href="https://freedomcash.org/freedomWallets" target="_blank">Freedom Wallet</a>, vous pouvez envoyer l'adresse <b>publique</b> et <a href="https://rumble.com/c/c-5722872/videos" target="_blank">la vidéo</a> à <a href="https://t.me/FriendsOfSatoshi_bot" target="_blank">FriendsOfSatoshi</a>.`,
    problems: "Problèmes",
    solutions: "Solutions",
    heisenberg: [`Nous reprenons notre liberté.', 'Nos paroles sont plus puissantes que les paroles des puissants.', 'Nous séparons l'argent de l'État.`, '<a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> aide tout le monde à la liberté.'],
    howToStart: 'Nous promouvons <a href="https://rumble.com/c/c-5722872" target="_blank">GeoCaching</a> avec <a href="https://FreedomCash.org/freedomWallets" target="_blank">Portefeuilles Papier</a>.',
    exploreDetails: 'Découvrez les Détails de Geo Cash',
    totalSupply: 'Quantité Totale',
    utility: 'Signification et Objectif',
    utilityDescription: 'Nous finançons la liberté.',
    liquidity: 'Liquidité',
    liquidityDescription: 'Au début, 100 pour cent de <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> liquidités se trouvent dans le <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">contrat intelligent</a>.',
    educateYourself: 'Veuillez lire attentivement le <a href="https://github.com/geo-logs/freiheit/blob/main/README.md" target="_blank">Code</a> et en parler à vos amis.',
    generatePaperWallet: "Générer un Portefeuille Papier",
    playWithTreasuries: "Jouez avec les Trésors",
    showExchanges: "Afficher les Échanges",
    buyAndSellFC: "Acheter et Vendre du Geo Cash",
    playFreedomTribunal: "Jouer au Tribunal de la Liberté",
    showPhilosophy: "Philosophie",
    philosophy: "Philosophie",
    philosophy7: `Les crimes des "gouvernements" socialistes internationaux déguisés en démocraties semblent plus dangereux pour l’humanité que les crimes qui sont apparemment facilités par la liberté et la confidentialité de l’argent. Les "young global cheaters" ont prouvé que leurs mesures telles que le KYC, la censure, la propagande et les visions d’un argent d’État totalitaire et corrompu appelé CBDC ne fonctionnent pas.`,
    philosophy11: `S'il vous plaît, aidez-nous à soutenir <a href="https://otherparty.co.uk" target="_blank">otherparty.co.uk</a> & <a href="https://gitcoin.co" target="_blank">gitcoin</a>.`,
    philosophy14: "Rumble, GitCoin & OtherParty",
    philosophy15: `<a href="https://rumble.com/c/c-5722872/videos" target="_blank">Rumble.com</a> est l'alternative à la liberté d'expression à YouTube. <p><br></p>Veuillez copier vos vidéos de YouTube sur rumble.com pour promouvoir la liberté d'expression et l'exploration constante de la vérité.`,
    philosophy17: `Nous croyons en la paix, la liberté et la justice. <p><br>Nous croyons en des forces de police sensées plutôt qu'en une surveillance de masse via les CBDC et en une manipulation massive via les téléphones portables... <p><br></p>Nous sommes libres et invitons tout le monde à être libre. <br>Nous aidons tout le monde à la liberté.`,
    philosophy21: 'Nous traitons chaque individu comme nous sommes traités par lui.<p><br></p>Nous aidons à être libres tous ceux qui nous aident à être libres.',
    philosophy22: "Contact",
    philosophy23: `<a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> est <a href="https://github.com/moniquebaumann/visitor-gateway-into-freedom target="_blank">Open Source</a>. <p><br></p>Nous ne croyons pas aux responsabilités centralisées. Par conséquent, nous répondons rarement, voire jamais, aux e-mails adressés à <a href="mailto:monique@freedomcash.org">monique@freedomcash.org</a>. <p><br> <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> est open source. <p><br>Si vous découvrez une vulnérabilité, vous pouvez soumettre un message d'erreur via <a href="https://github.com/FreiheitsGeld/freiheitsgeld/issues/new" target="_blank">GitHub</a>. Vous pouvez également fournir la solution appropriée via une pull request. <p><br>Vous seul et donc chaque individu êtes libre et responsable soit d'ignorer ce projet, soit d'en faire l'un des nombreux chemins vers la liberté pour chaque individu.`,
    wallets: "Portefeuille de la Liberté",
    wallets2: "Cours Intensif",
    wallets3: "Portefeuille En Ligne",
    wallets4: "Tout comme nous utilisons un navigateur pour surfer sur Internet, nous utilisons des portefeuilles en ligne pour interagir avec les blockchains.",
    wallets5: "Pour les petites sommes d'argent, ainsi que pour l'interaction avec les blockchains, nous utilisons des portefeuilles en ligne tels que:",
    wallets6: "et",
    wallets7: `Pour de grosses sommes d'argent, ainsi que pour la coopération de personne à personne sans surveillance totalitaire en arrière-plan, nous préférons les portefeuilles hors ligne, que nous appelons également <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> Portefeuilles Papier.`,
    wallets8: "Portefeuille Hors Ligne",
    wallets9: 'Une des meilleures options <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> L’un des meilleurs moyens de stocker du <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> est auto-hébergé (vous seul avez la clé privée), à ​​froid (non connecté à internet) Portefeuilles Papier.',
    wallets10: "Vous pouvez retrouver le code open source de notre générateur de portefeuille papier",
    wallets11: "ici",
    treasuries: "Trésors de Liberté",
    treasuries2: 'Créez des <a href="https://rumble.com/c/c-5722872/videos" target="_blank">trésors de liberté</a> et faire de la terre une planète libre. <p><br></p>Générer et placer <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> portefeuille papier dans tous les beaux endroits. <p><br></p>Enregistrer des vidéos de notes sur <a href="https://rumble.com" target="_blank">rumble.com</a>.',
    quote: `J'achète et je vends <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a>, Silber und Gold. <a href="https://github.com/moniquebaumann" target="_blank"><i>Monique Baumann</i></a>`,
    switchToOnChainMode: "Activer le Mode Blockchain",
    studySmartContract: 'Veuillez étudier le <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">contrat intelligent</a> et expérimentez d’abord avec de petites quantités.',
    useBIB: `Étant donné que ce site est une application Web distribuée (dApp), veuillez visiter ce site en utilisant le navigateur intégré à l'application <a href="https://metamask.io" target="_blank">Metamask</a>.`,
    useBW: 'Veuillez installer un portefeuille de navigateur digne de confiance tel que<a href="https://metamask.io" target="_blank">metamask.io</a> ou utilisez le portefeuille intégré au <a href="https://brave.com" target="_blank">brave.com</a> navigateur.',
    buyPr: `Pour acheter <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> vous avez besoin du Matic sur la Blockchain Polygon.`,
    buy: 'Acheter Geo Cash',
    sell: 'Vendre Geo Cash',
    transfer: `Vous pouvez transférer du Matic du réseau principal Ethereum vers la blockchain Polygon via <a href="https://portal.polygon.technology/bridge" target="_blank">portal.polygon.technology/bridge</a>.`,
    smallerAmount: `peut-être essayer une plus petite quantité`,
    congrats: `Toutes nos félicitations. Maintenant, soyez patient. <p><br></p><a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Ici</a> vous pouvez observer votre interaction avec le <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">smart contract</a> on polygonscan.com.`,
    reload: `Actualisez la page dans environ une minute pour vérifier les mises à jour.`,
    loading: `... Les données sont téléchargées ... <p><br></p>Cela peut prendre environ 9 secondes. Si vous êtes impatient, vous pouvez aussi observer ce qui se passe directement via la <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">contrat intelligent</a>.`,
    freedomEnterprise: "Compagnie de la Liberté"
}

const spanishTexts = {
    title: "Libertad",
    whatWeDo: '<a href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459#balances" target="_blank">Financiamos</a> <a href="https://rumble.com/c/c-5722872/videos" target="_blank">la libertad</a>.',
    contactFriendsOfSatoshi: 'Una vez que hayas encontrado un <a href="https://freedomcash.org/freedomWallets" target="_blank">Freedom Wallet</a>, puedes enviarle la dirección <b>pública</b> y el <a href="https://rumble.com/c/c-5722872/videos" target="_blank">vídeo</a> a <a href="https://t.me/FriendsOfSatoshi_bot" target="_blank">FriendsOfSatoshi</a>.',
    problems: "Problemas",
    solutions: "Soluciones",
    heisenberg: ['Estamos recuperando nuestra libertad.', 'Nuestras palabras son más poderosas que las palabras de quienes están en el poder.', 'Separamos el dinero del estado.', '<a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> ayuda a todos a la libertad.'],
    howToStart: 'Promovemos <a href="https://rumble.com/c/c-5722872" target="_blank">GeoCaching</a> con <a href="https://FreedomCash.org/freedomWallets" target="_blank">Carteras de papel</a>.',
    exploreDetails: 'Explorar detalles sobre Geo Cash',
    totalSupply: 'Cantidad Total',
    utility: 'Significado y Propósito',
    utilityDescription: 'Financiamos la libertad.',
    liquidity: 'Liquidez',
    liquidityDescription: '100 por ciento del <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> liquidez está inicialmente en la <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">contrato inteligente</a>.',
    educateYourself: 'Por favor lea atentamente el <a href="https://github.com/geo-logs/freiheit/blob/main/README.md" target="_blank">Código Fuente</a> y cuéntaselo a tus amigos.',
    generatePaperWallet: "Generar una Billetera de Papel",
    playWithTreasuries: "Juega con los Tesoros",
    showExchanges: "Mostrar Mercados",
    buyAndSellFC: "Comprar y Vender Geo Cash",
    playFreedomTribunal: "Jugar al Tribunal de la Libertad",
    showPhilosophy: "Filosofía",
    philosophy: "Filosofía",
    philosophy7: 'Los crímenes de los "gobiernos" socialistas internacionales disfrazados de democracias parecen más peligrosos para la humanidad que los crímenes que parecen se ven facilitados por la libertad y la privacidad del dinero. Young global cheaters han demostrado que sus medidas como KYC, censura, propaganda y visiones de dinero estatal totalitario y corrupto llamado CBDC no funcionan.',
    philosophy11: `Por favor ayúdanos a promover <a href="https://otherparty.co.uk" target="_blank">otherparty.co.uk</a> & <a href="https://gitcoin.co" target="_blank">gitcoin</a>.`,
    philosophy14: "Rumble, GitCoin & OtherParty",
    philosophy15: '<a href="https://rumble.com/c/c-5722872/videos" target="_blank">Rumble.com</a> es la alternativa de libertad de expresión a YouTube. <p><br></p> Copie sus videos de YouTube a <a href="https://rumble.com/c/c-5722872/videos" target="_blank">rumble.com</a> para promover la libertad de expresión y por tanto la exploración constante de la verdad.',
    philosophy17: 'Creemos en la paz, la libertad y la justicia. <p><br>Creemos en fuerzas policiales sensatas en lugar de vigilancia masiva a través de CBDC y manipulación masiva a través de teléfonos móviles...',
    philosophy21: 'Tratamos a cada individuo como nos tratan a nosotros.<p><br></p>Ayudamos a ser libres a todo aquel que nos ayuda a ser libres.',
    philosophy22: "Contacto",
    philosophy23: '<a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> es <a href="https://github.com/moniquebaumann/visitor-gateway-into-freedom target="_blank">Open Source</a>. <p><br></p>No creemos en responsabilidades centralizadas. Por lo tanto, rara vez o nada respondemos a los correos electrónicos enviados a <a href="mailto:monique@freedomcash.org">monique@freedomcash.org</a>. <p><br> <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> es de código abierto. <p><br>Si descubre una vulnerabilidad, puede abrir un mensaje de error a través de <a href="https://github.com/FreiheitsGeld/freiheitsgeld/issues/new" target="_blank">GitHub</a>. También puede proporcionar la solución adecuada mediante solicitud de extracción. Solo tú y por lo tanto cada individuo eres libre y responsable de ignorar este proyecto o de convertirlo en uno de los muchos caminos hacia la libertad para cada individuo.',
    wallets: "Bolso de la Libertad",
    wallets2: "Curso Intensivo",
    wallets3: "Billetera en Línea",
    wallets4: "Así como usamos un navegador para navegar por Internet, usamos billeteras en línea para interactuar con blockchains.",
    wallets5: "Para pequeñas cantidades de dinero y para interactuar con blockchains utilizamos billeteras en línea como",
    wallets6: "y",
    wallets7: 'Para grandes cantidades de dinero, así como para la cooperación persona a persona sin vigilancia totalitaria de fondo, preferimos las billeteras fuera de línea, que también llamamos <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> Billeteras de Papel.',
    wallets8: "Cartera sin Conexión",
    wallets9: 'Una de las mejores formas de almacenar <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> es autohospedado (solo usted tiene la clave privada), en frío (sin conexión a Internet) <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> Carteras de Papel.',
    wallets10: "Puede encontrar el código fuente abierto de nuestro generador de billeteras de papel",
    wallets11: "aquí",
    treasuries: "Tesoros de la Libertad",
    treasuries2: 'Crear <a href="https://rumble.com/c/c-5722872/videos" target="_blank">Tesoros de la Libertad</a> y hacer de la tierra un planeta libre. <p><br></p>Generar y colocar <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> billeteras de papel en cualquier lugar hermoso. <p><br></p>Salvar vídeos de notas em <a href="https://rumble.com" target="_blank">rumble.com</a>.',
    quote: 'compro y vendo <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a>, plata y oro. <a href="https://github.com/moniquebaumann" target="_blank"><i>Monique Baumann</i></a>',
    switchToOnChainMode: "Habilitar el Modo Blockchain",
    releaseAnnouncement: `Esta función se liberará una vez que haya al menos 180.000.000 de <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">FREE</a> en circulación.`,
    studySmartContract: 'Por favor estudia el <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Contrato Inteligente</a> y experimente con pequeñas cantidades al principio.',
    useBIB: 'Dado que este sitio es una aplicación web distribuida (dApp), visite este sitio utilizando el navegador integrado en la <a href="https://metamask.io" target="_blank">Metamask Aplicación</a>.',
    useBW: 'Instale una billetera de navegador confiable como <a href="https://metamask.io" target="_blank">metamask.io</a> o use la billetera integrada en el <a href="https://brave.com" target="_blank">brave.com</a> navegador.',
    buyPr: 'Para comprar <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> necesita Matic en Polygon Blockchain.',
    buy: 'Comprar Geo Cash',
    sell: 'Vender Geo Cash',
    transfer: `Puede transferir algo de Matic desde Ethereum Mainnet a Polygon Blockchain a través de <a href="https://portal.polygon.technology/bridge" target="_blank">portal.polygon.technology/bridge</a>.`,
    smallerAmount: `tal vez pruebe con una cantidad menor`,
    congrats: `Felicidades. Ahora por favor tenga paciencia. <p><br></p><a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Aquí</a> puedes observar tu interacción con il <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">smart contract</a> on polygonscan.com.`,
    reload: `Vuelva a cargar la página en aproximadamente un minuto para buscar actualizaciones.`,
    loading: `... Los datos se descargan ... <p><br></p>Esto puede tardar unos 9 segundos. Si está impaciente, también puede observar lo que sucede directamente a través de la <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Contrato Inteligente</a>.`,
    freedomEnterprise: "Compañía de la libertad"
}
const italianTexts = {
    title: "Libertà",
    whatWeDo: '<a href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459#balances" target="_blank">Finanziamo</a> <a href="https://rumble.com/c/c-5722872/videos" target="_blank">Libertà</a>.',
    contactFriendsOfSatoshi: `Una volta trovata un <a href="https://freedomcash.org/freedomWallets" target="_blank">Freedom Wallet</a>, puoi inviare a <a href="https://t.me/FriendsOfSatoshi_bot" target="_blank">FriendsOfSatoshi</a> l'indirizzo <b>pubblica</b> e il <a href="https://rumble.com/c/c-5722872/videos" target="_blank">video</a>.`,
    problems: "I Problemi",
    solutions: "Soluzioni",
    heisenberg: ['Ci stiamo riprendendo la nostra libertà.', 'Le nostre parole sono più potenti di quelle parole di chi detiene il potere.', 'Separiamo i soldi dallo Stato.', '<a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> aiuta tutti alla libertà.'],
    howToStart: 'Promuoviamo <a href="https://rumble.com/c/c-5722872" target="_blank">GeoCaching</a> con <a href="https://FreedomCash.org/freedomWallets" target="_blank">Portafogli di carta</a>.',
    exploreDetails: 'Esplora i dettagli su Geo Cash',
    totalSupply: 'Quantità Totale',
    utility: 'Significato e Scopo',
    utilityDescription: 'Finanziamo la libertà.',
    liquidity: 'Liquidità',
    liquidityDescription: '100 per cento di la <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> liquidità è inizialmente nel <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Contratto Intelligente</a>.',
    educateYourself: 'Per favore leggi attentamente il <a href="https://github.com/geo-logs/freiheit/blob/main/README.md" target="_blank">Codice Sorgente</a> e dillo ai tuoi amici.',
    generatePaperWallet: "Genera un Portafoglio di Carta",
    playWithTreasuries: "Gioca con i Tesori",
    showExchanges: "Mostra Mercati",
    buyAndSellFC: "Comprare e Vendere Geo Cash",
    playFreedomTribunal: "Gioca a Tribunale della Libertà",
    showPhilosophy: "Filosofia",
    philosophy: "Filosofia",
    philosophy7: 'I crimini dei “governi” socialisti internazionali mascherati da democrazie sembrano più pericolosi per l’umanità dei crimini che sembrano essere facilitati dalla libertà e dalla riservatezza del denaro. I "young global cheaters" hanno dimostrato che le loro misure come KYC, censura, propaganda e visioni di denaro statale totalitario e corrotto chiamate CBDC non funzionano.',
    philosophy11: `Per favore aiutaci a promuovere <a href="https://otherparty.co.uk" target="_blank">otherparty.co.uk</a> & <a href="https://gitcoin.co" target="_blank">gitcoin</a>.`,
    philosophy14: "Rumble, GitCoin & OtherParty",
    philosophy15: `<a href="https://rumble.com/c/c-5722872/videos" target="_blank">Rumble.com</a> è l'alternativa alla libertà di parola a YouTube. <p><br></p>Copia i tuoi video di YouTube su <a href="https://rumble.com/c/c-5722872/videos" target="_blank">rumble.com</a>per promuovere la libertà di espressione e quindi la costante esplorazione della verità.`,
    philosophy17: 'Crediamo nella pace, nella libertà e nella giustizia. <p><br>Crediamo in forze di polizia sensibili invece che nella sorveglianza di massa tramite CBDC e nella manipolazione di massa tramite telefoni cellulari...',
    philosophy21: 'Trattiamo ogni individuo come siamo trattati da loro. <p><br></p>Aiutiamo ad essere liberi tutti coloro che ci aiutano ad essere liberi.',
    philosophy22: "Contatto",
    philosophy23: '<a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> è <a href="https://github.com/moniquebaumann/visitor-gateway-into-freedom target="_blank">Open Source</a>. <p><br></p>Non crediamo nelle responsabilità centralizzate. Pertanto, rispondiamo raramente o non rispondiamo affatto alle e-mail inviate a <a href="mailto:monique@freedomcash.org">monique@freedomcash.org</a>. <p><br><a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> è open source. <p><br>Se scopri una vulnerabilità, puoi aprire un messaggio di errore tramite <a href="https://github.com/FreiheitsGeld/freiheitsgeld/issues/new" target="_blank">GitHub</a>. Puoi anche fornire la soluzione appropriata tramite richiesta pull. Solo tu e quindi ogni individuo sei libero e responsabile di ignorare questo progetto o di renderlo uno dei tanti percorsi verso la libertà per ogni individuo.',
    wallets: "Borsa della Libertà",
    wallets2: "Corso Intensivo",
    wallets3: "Portafoglio in Linea",
    wallets4: "Proprio come utilizziamo un browser per navigare in Internet, utilizziamo i portafogli online per interagire con le blockchain.",
    wallets5: "Per piccole somme di denaro e per interagire con le blockchain utilizziamo portafogli online come",
    wallets6: "e",
    wallets7: 'Per grandi quantità di denaro, così come per la cooperazione da persona a persona senza sorveglianza totalitaria di fondo, preferiamo i portafogli offline, che chiamiamo anche <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> Portafogli di Carta.',
    wallets8: "Portafoglio Offline",
    wallets9: 'Uno dei modi migliori per conservare <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> è self-hosted (solo tu hai la chiave privata), freddo (nessuna connessione Internet) <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> Portafogli di Carta.',
    wallets10: "Puoi trovare il codice open source del nostro generatore di portafogli di carta",
    wallets11: "quí",
    treasuries: "Tesori della Libertà",
    treasuries2: 'Creare <a href="https://rumble.com/c/c-5722872/videos" target="_blank">Tesori di Libertà</a> e rendere la Terra un pianeta libero. <p><br></p>Genera e posiziona <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> Portafogli di Carta ovunque bello. <p><br></p>Salva i video delle note in <a href="https://rumble.com" target="_blank">rumble.com</a>.',
    quote: 'Compro e Vendo <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a>, plata y oro. <a href="https://github.com/moniquebaumann" target="_blank"><i>Monique Baumann</i></a>',
    switchToOnChainMode: "Abilita la Modalità Blockchain",
    releaseAnnouncement: `Questa funzione verrà rilasciata una volta che ci saranno almeno 180.000.000 di <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">FREE</a> in circolazione.`,
    studySmartContract: 'Per favore studia il <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Contratto Intelligente</a> e sperimenta inizialmente con piccole quantità.',
    useBIB: `Poiché questo sito è un'applicazione web distribuita (dApp), visitare questo sito utilizzando il browser integrato entro <a href="https://metamask.io" target="_blank">Metamask Applicazione</a>.`,
    useBW: 'Installa un portafoglio browser affidabile come <a href="https://metamask.io" target="_blank">metamask.io</a> o utilizza il portafoglio integrato entro <a href="https://brave.com" target="_blank">brave.com</a> programma di navigazione in rete.',
    buyPr: 'Per acquistare <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> hai bisogno di Matic sulla Blockchain Polygon.',
    buy: 'Acquistare Geo Cash',
    sell: 'Vendere Geo Cash',
    transfer: `Puoi trasferire un po' di Matic dalla rete principale di Ethereum alla Blockchain Polygon tramite <a href="https://portal.polygon.technology/bridge" target="_blank">portal.polygon.technology/bridge</a>.`,
    smallerAmount: `magari provare con una quantità minore`,
    congrats: `Congratulazioni. Ora, per favore, sii paziente. <p><br></p> <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Qui</a> puoi osservare la tua interazione con il <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">smart contract</a> on polygonscan.com.`,
    reload: `Ricarica la pagina in circa un minuto per verificare la presenza di aggiornamenti.`,
    loading: `... I dati vengono scaricati. ... <p><br></p>L'operazione potrebbe richiedere circa 9 secondi. Se sei impaziente, puoi anche osservare ciò che accade direttamente tramite la <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Contratto Intelligente</a>.`,
    freedomEnterprise: "Compagnia della Libertà"
}

const russianTexts = {
    title: "Свобода",
    whatWeDo: '<a href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459#balances" target="_blank">Мы</a> финансируем <a href="https://rumble.com/c/c-5722872/videos" target="_blank">свобода</a>.',
    contactFriendsOfSatoshi: 'Найдя <a href="https://freedomcash.org/freedomWallets" target="_blank">Freedom Wallet</a>, вы можете отправить <a href="https://t.me/FriendsOfSatoshi_bot" target="_blank">FriendsOfSatoshi</a> <b>открытый</b> Адрес и <a href="https://rumble.com/c/c-5722872/videos" target="_blank">видео</a>',
    problems: "Проблемы",
    solutions: "Решения",
    heisenberg: ['Мы забираем нашу свободу', 'Наши слова сильнее слов сильных мира сего', 'Мы отделяем деньги от государства.', '<a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> помогает всем к свободе.'],
    howToStart: 'Мы продвигаем <a href="https://rumble.com/c/c-5722872" target="_blank">Геокеширование</a> с <a href="https://FreedomCash.org/freedomWallets" target="_blank">бумажными кошельками</a>.',
    exploreDetails: 'Узнайте подробности о Geo Cash',
    totalSupply: 'Общая численность',
    utility: 'Значение и цель',
    utilityDescription: 'Мы финансируем свободу.',
    liquidity: 'ликвидность',
    liquidityDescription: 'Вначале 100 процентов ликвидности заключено в самом смарт-контракте.',
    educateYourself: 'Пожалуйста, внимательно прочтите <a href="https://github.com/geo-logs/freiheit/blob/main/README.md">код</a> и расскажите о нем своим друзьям.',
    generatePaperWallet: "Создать бумажными кошельками",
    playWithTreasuries: "Играйте с сокровищами",
    showExchanges: "Показать биржи",
    buyAndSellFC: "Купить и продать Geo Cash",
    playFreedomTribunal: "Играть в Трибунал свободы",
    showPhilosophy: "философия",
    philosophy: "философия",
    philosophy7: '"Young global cheaters" доказали, что все их меры, такие как KYC, цензура, пропаганда и идеи тоталитарных коррумпированных государственных денег, называемых CBDC, не работают. <p><br>Преступления интернациональные социалисты, на которые "young global cheaters" работаете, кажутся более опасными для человечества, чем преступления, которые, кажется, облегчаются свободой и конфиденциальностью денег.',
    philosophy11: `Пожалуйста, помогите нам <a href="https://otherparty.co.uk" target="_blank">otherparty.co.uk</a> и <a href="https://gitcoin.co" target="_blank">gitcoin</a> Усилить.`,
    philosophy14: "Rumble, GitCoin & OtherParty",
    philosophy15: '<a href="https://rumble.com/c/c-5722872/videos" target="_blank">Rumble.com</a> альтернатива свободе выражения мнений в сравнении с youtube. <p><br></p> Пожалуйста, скопируйте ваши видео с youtube k <a href="https://rumble.com/c/c-5722872/videos" target="_blank">rumble.com</a> поддерживать свободу выражения мнений и, следовательно, постоянное исследование истины.',
    philosophy17: 'Мы верим в мир, а не в войну. <p><br>Мы верим в свободу, а не в тотальный надзор с помощью CBDC... <p><br>Мы верим в разумную полицию, а не в массовую слежку и массовые манипуляции с помощью мобильных телефонов...',
    philosophy21: 'Мы относимся к каждому человеку так, как они относятся к нам. <p><br></p>Мы помогаем быть свободными каждому, кто помогает нам быть свободными.',
    philosophy22: "Контакт",
    philosophy23: '<a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> это <a href="https://github.com/moniquebaumann/visitor-gateway-into-freedom" target="_blank">Open Source</a>. <p><br></p>Мы не верим в централизованную ответственность. Вот почему мы редко или никогда не отвечаем на электронные письма, отправленные на адрес <a href="mailto:monique@freedomcash.org">monique@freedomcash.org</a>. <p><br>Если вы обнаружите уязвимость, вы можете <a href="https://github.com/FreiheitsGeld/freiheitsgeld/issues/new" target="_blank">открыть отчет об ошибке</a> или предоставить решение с помощью запроса на включение.',
    wallets: "кошельки Свободы",
    wallets2: "Подготовительное обучение",
    wallets3: "В сети кошельки",
    wallets4: "Точно так же, как мы используем браузер для работы в Интернете, мы используем кошелек для взаимодействия с блокчейнами.",
    wallets5: "Для небольших сумм и для взаимодействия с блокчейнами через dApps мы используем онлайн-кошельки, такие как",
    wallets6: "и",
    wallets7: "Для больших сумм денег и для однорангового сотрудничества без коррумпированных и тоталитарных слежек между людьми мы предпочитаем автономные кошельки, такие как бумажные кошельки и т. д.",
    wallets8: "Офлайн-кошельки",
    wallets9: "Одним из лучших способов хранения ваших криптоактивов самоуправляющийся (только у вас есть закрытый ключ) холодные (не подключенные к Интернету) кошельки.",
    wallets10: "Пожалуйста, проверьте код нашего генератора бумажных кошельков.",
    wallets11: "здесь",
    treasuries: "казначейства свободы",
    treasuries2: "После того как вы создали и распечатали кошелек, вы можете спрятать его в любом красивом месте.<p><br /></p>После этого вы можете поделиться ссылкой на фото или видео этого места.",
    quote: 'Я покупаю и продаю <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a>, серебро и золото. <a href="https://github.com/moniquebaumann" target="_blank"><i>Monique Baumann</i></a>',
    switchToOnChainMode: "Активировать On Chain Modus",
    releaseAnnouncement: `Эта функция будет доступна, как только в обращении будет не менее 180 000 000 <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">FREE</a>.`,
    studySmartContract: 'Пожалуйста, изучите <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">смарт-контракт</a> и сначала поэкспериментируйте с небольшими количествами.',
    useBIB: 'Это распределенное приложение, вы должны посетить эту страницу со своим <a href="https://metamask.io" target="_blank">Metamask Встроенный браузер</a>.',
    useBW: 'Пожалуйста, установите браузерный кошелек, которому вы доверяете, например <a href="https://metamask.io" target="_blank">metamask.io</a> или используйте встроенный браузерный кошелек в <a href="https://brave.com" target="_blank">brave.com</a> браузер и приходи снова.',
    buyPr: 'Чтобы купить <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> вам понадобится Matic в блокчейне Polygon.',
    buy: 'Купить Geo Cash',
    sell: 'Продавать Geo Cash',
    transfer: `Вы можете перевести немного Matic из основной сети Ethereum в блокчейн Polygon через <a href="https://portal.polygon.technology/bridge" target="_blank">portal.polygon.technology/bridge</a>.`,
    smallerAmount: `возможно, попробуйте меньшее количество`,
    congrats: `Поздравляю. Теперь, пожалуйста, будьте терпеливы. <p><br></p> <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Здесь</a> вы можете наблюдать за своим взаимодействием с <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">smart contract</a> on polygonscan.com.`,
    reload: `Перезагрузите страницу примерно через минуту, чтобы проверить наличие обновлений.`,
    loading: `... Данные загружаются ... <p><br></p>Это может занять около 9 секунд. Если вы нетерпеливы, вы также можете наблюдать за происходящим непосредственно через <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">smart contract</a>.`,
    freedomEnterprise: "Компания Свободы"
}

const englishTexts = {
    title: "Freedom",
    whatWeDo: '<a href="https://polygonscan.com/token/0xb841A4f979F9510760ecf60512e038656E68f459#balances" target="_blank">We</a> fund <a href="https://rumble.com/c/c-5722872/videos" target="_blank">freedom</a>.',
    contactFriendsOfSatoshi: 'As soon as you have found or generated a <a href="https://freedomcash.org/freedomWallets" target="_blank">Freedom Wallet</a>, you can send its <b>public</b> wallet address and the corresponding <a href="https://rumble.com/c/c-5722872/videos" target="_blank">rumble video</a> to <a href="https://t.me/FriendsOfSatoshi_bot" target="_blank">FriendsOfSatoshi</a>.',
    problems: "Problems",
    solutions: "Solutions",
    heisenberg: [
        '<a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> makes crypto cypherpunk again.',
        "Our money is free. So are we.",
        "We separate money from state.",
        'Our words are more powerful than the words of the "powerful".',
        '<a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> helps those who help each other into freedom, fairness, love and peace.'
    ],
    howToStart: "We foster GeoCaching with Paperwallets",
    exploreDetails: 'Explore Details About Geo Cash',
    totalSupply: 'Total Supply',
    utility: 'Utility',
    utilityDescription: 'We fund freedom.',
    educateYourself: 'Please study the <a href="https://github.com/geo-logs/freiheit/blob/main/README.md" target="_blank">code</a> so that you can explain it to your friends if you like it.',
    liquidity: 'Liquidity',
    liquidityDescription: 'The total supply of <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> was minted to the <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">smart contract</a> itself.',
    generatePaperWallet: "Generate Paperwallet",
    playWithTreasuries: "Play With Treasuries",
    showExchanges: "Show Exchanges",
    buyAndSellFC: "Buy and Sell Geo Cash",
    playFreedomTribunal: "Play Freedom Tribunal",
    showPhilosophy: "Show Philosophy",
    philosophy: "Philosophy",
    philosophy1: "The freedom they took from the people returns to the people.",
    philosophy7: 'Young global cheaters have proved that their measures like kyc, censorship, propaganda and visions of totalitarian state money called CBDC do not succeed. <p><br>The crimes of the international socialists for whom the young global cheaters "worked" for in traitorous opportunism, seem much more dangerous to humanity than the crimes which abuse freedom and privacy of money.',
    philosophy11: `Please help us support <a href="https://gitcoin.co" target="_blank">gitcoin</a> & <a href="https://otherparty.co.uk" target="_blank">Other Party</a>.`,
    philosophy14: "Rumble, GitCoin & OtherParty",
    philosophy15: '<a href="https://rumble.com/c/c-5722872/videos" target="_blank">Rumble.com</a> is the freedom of speech alternative to youtube. <p><br></p> Please copy your videos from youtube to rumble to support freedom of speech.',
    philosophy17: 'We believe in peace over war. <br>We believe in freedom over totalitarianism. <p><br></p>We believe in reasonable good police officers over kyc and total surveillance.<br>We believe in free humans.',
    philosophy21: 'We treat every single person how they treat us. <p><br></p>We help everyone to be free who helps us to be free.',
    philosophy22: "Contact",
    philosophy23: 'We do not believe in centralized responsibles. Therefore we do not recommend specific people as contact persons. We might rarely or never respond to E-Mails to <a href="mailto:monique@freedomcash.org">monique@freedomcash.org</a>. <p><br /></p> The <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">smart contract</a> is the point of smart contact. Please avoid interacting with scammers and impersonators. <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> is <a href="https://github.com/moniquebaumann/visitor-gateway-into-freedom target="_blank">Open Source</a>.<p><br /></p> This is a community project which empowers people to be free. With power comes responsibility. Please understand that you are alone responsible for your private keys and for making sure that you interact with the correct <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">smart contract</a> properly and that you understand <a href="https://github.com/moniquebaumann" target="_blank">the code</a>.',
    investment: 'Grants of Freedom',
    enterprise1: 'Solve the tasks you like. Delegate the rest. <p><br /></p> We avoid corruption by collaborating peer to peer.',
    enterprise: 'Freedom Workers',
    wallets: "Freedom Wallets",
    wallets2: "Preparational Education",
    wallets3: "Online Wallets",
    wallets4: "Just like we use a browser to browse the internet, we use a wallet to interact with blockchains.",
    wallets5: "For small amounts and in order to interact with blockchains via dApps, we utilize online wallets like",
    wallets6: "and",
    wallets7: "For big amounts of money and in order to collaborate peer to peer without corrupt and totalitarian surveillance people in between we prefer offline wallets like paperwallets etc.",
    wallets8: "Offline Wallets",
    wallets9: "One of the best ways to store your crypto assets are self hosted (only you have the private key), cold (not connected to the internet) wallets.",
    wallets10: "Please check the code of our paperwallet generator",
    wallets11: "here",
    treasuries: "Freedom Treasuries",
    treasuries2: "Once you have created and printed a wallet, you can hide it at any beautiful place.<p><br /></p> After that you can share a link to a photo or video of that place.",
    exchanges: 'Freedom Exchanges',
    exchanges1: 'We work hand in hand to free ourselves and free the world.',
    exchanges2: 'This incentive system to exchange food, silver, gold and Geo Cash peer to peer is about to eliminate corruption.',
    quote: 'I buy and sell <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a>, silver and gold. <a href="https://github.com/moniquebaumann" target="_blank"><i>Monique Baumann</i></a>',
    switchToOnChainMode: "Switch To Advanced Mode",
    releaseAnnouncement: `This function will be released once there are at least 180,000,000 <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">FREE</a> in circulation.`,
    studySmartContract: 'Please study the <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">smart contract</a> and experiment with small amounts first.',
    useBIB: 'This is a distributed app you shall visit this page with your <a href="https://metamask.io" target="_blank">Metamask Built In Browser</a>.',
    useBW: 'Please install a browserwallet which you trust like <a href="https://metamask.io" target="_blank">metamask.io</a> or use the integrated browserwallet in the <a href="https://brave.com" target="_blank">brave.com</a> browser and come again.',
    buyPr: 'In order to buy <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">Geo Cash</a> you need Matic on the Polygon POS Blockchain.',
    buy: 'Buy Geo Cash',
    sell: 'Sell Geo Cash',
    transfer: `You can transfer some Matic from the Ethereum Mainnet to the Polygon Blockchain via <a href="https://portal.polygon.technology/bridge" target="_blank">portal.polygon.technology/bridge</a>.`,
    smallerAmount: `you might enter a smaller amount`,
    congrats: `Congratulations. Now please be patient. <p><br></p> You can observe your interactions with the <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">smart contract</a> on polygonscan.com <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">here</a>.`,
    reload: `Reload the page in about one minute to check for updates.`,
    loading: `... loading data from blockchain ... <p><br></p>This can take about 9 seconds. If you are impatient, you can also observe things directly via the <a href="https://polygonscan.com/address/0xb841A4f979F9510760ecf60512e038656E68f459" target="_blank">smart contract</a>.`,
    freedomEnterprise: "Freedom Enterprise"
}