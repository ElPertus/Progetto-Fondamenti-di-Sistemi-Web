const Home = {
    template: `
    <main>
        <div><img src="./img/barra.jpg" alt="" /></div>
        <section>
            <h2 class="text-primary" id="primo">Cos'è una SEO?</h2>
            <p class="text-secondary">SEO sta per “Search Engine Optimization.” È la pratica di aumentare sia la qualità che la quantità del <router-link to="/glossario">traffico</router-link> del sito Web, nonché l'esposizione al tuo marchio, attraverso risultati dei motori di ricerca           non a pagamento (noti anche come "organici").
                <br/><br/> Nonostante l'acronimo, SEO riguarda tanto le persone quanto gli stessi motori di ricerca. Si tratta di capire cosa cercano le persone online, le risposte che vogliono, le parole che usano e il tipo di contenuto che desiderano
                consumare. Conoscere le risposte a queste domande consente di entrare in contatto con le persone che cercano online le soluzioni che puoi offrire.
            </p>
        </section>
        <section>
            <h2 class="text-primary" id="sec">Perché è così importante</h2>
            <p class="text-secondary">Sebbene la pubblicità a pagamento, i <router-link to="/glossario">social media</router-link> e altre piattaforme online possano generare <router-link to="/glossario">traffico</router-link> verso i siti Web, la maggior parte del traffico online è guidata
                dai motori di ricerca.
                <br/><br/> I risultati di ricerca <router-link to="/glossario">organici</router-link> coprono più proprietà digitali, appaiono più credibili agli utenti esperti e ricevono molti più clic rispetto agli annunci a pagamento. Ad esempio, di tutte
                le ricerche negli Stati Uniti, solo il 2,8% circa delle persone fa clic su annunci a pagamento.
                <br/><br/> La SEO è anche uno dei pochi canali di marketing online che, se impostato correttamente, può continuare a dare i suoi frutti nel tempo. Se fornisci un contenuto solido che merita di essere classificato per le parole chiave giuste,
                il tuo traffico può aumentare di volume nel tempo, mentre la pubblicità ha bisogno di finanziamenti continui per inviare traffico al tuo sito.
                <br/><br/> L'ottimizzazione di un sito aiuterà a fornire informazioni migliori ai motori di ricerca in modo che i contenuti possano essere correttamente indicizzati e visualizzati nei risultati di ricerca.
            </p>
        </section>
        <section>
            <h2 class="text-primary" id="terzo">Motori di Ricerca</h2>
            <p class="text-secondary">I motori di ricerca sono macchine di risposta. Perlustrano miliardi di contenuti e valutano migliaia di fattori per determinare quale contenuto ha maggiori probabilità di rispondere alla tua domanda.
                <br/><br/> I motori di ricerca fanno tutto questo scoprendo e catalogando tutti i contenuti disponibili su Internet (pagine Web, PDF, immagini, video, ecc.) tramite un processo noto come "scansione e indicizzazione" e quindi ordinandoli
                in corrispondenza alla <router-link to="/glossario">query</router-link> in un processo denominato “ranking/classifica”.
            </p>
        </section>
        <section>
            <h2 class="text-primary" id="quarto">Come funzionano?</h2>
            <p class="text-secondary">I motori di ricerca funzionano attraverso tre funzioni principali:
                <br/><br/> Scansione: esplora Internet alla ricerca di contenuti, esaminando il codice/il contenuto per ogni <router-link to="/glossario">URL</router-link> che trovano.
                <br/><br/>Indicizzazione: archivia e organizza i contenuti trovati durante il processo di scansione. Una volta che una pagina è nell'indice, è in esecuzione per essere visualizzata come risultato di <router-link to="/glossario">query</router-link>                pertinenti.
                <br/><br/>Classifica: fornisci i contenuti che rispondono meglio alla query di un ricercatore, il che significa che i risultati sono ordinati dal più pertinente al meno pertinente.
            </p>
        </section>
        <section>
            <h2 class="text-primary" id="quinto">Che cos'è la scansione?</h2>
            <p class="text-secondary">La scansione è il processo di scoperta in cui i motori di ricerca inviano un team di <router-link to="/glossario">bot</router-link> (noti come crawler o spider) per trovare contenuti nuovi e aggiornati. Il contenuto può variare — potrebbe essere una
                pagina web, un'immagine, un video, un PDF, ecc. — ma indipendentemente dal formato, il contenuto viene scoperto dai link.
                <br/><br/> Googlebot inizia recuperando alcune pagine Web, quindi segue i collegamenti su tali pagine Web per trovare nuovi <router-link to="/glossario">URL</router-link>. Saltando lungo questo percorso di collegamenti, il crawler è in grado di
                trovare nuovo contenuto e aggiungerlo al proprio indice chiamato <router-link to="/glossario">Caffeine</router-link>, un enorme <router-link to="/glossario">database</router-link> di URL scoperti, per essere successivamente recuperato quando un ricercatore
                cerca informazioni e in quell’ URL si trova contenuto adatto alla ricerca.
            </p>
        </section>
        <section>
            <h2 class="text-primary" id="sesto">Che cos'è un indice?</h2>
            <p class="text-secondary">I motori di ricerca elaborano e archiviano le informazioni che trovano in un indice, un enorme <router-link to="/glossario">database</router-link> di tutti i contenuti che hanno scoperto e che ritengono sufficientemente buoni da essere visualizzati
                dagli utenti.
            </p>
        </section>
        <section>
            <h2 class="text-primary" id="sett">Classifica sui motori di ricerca</h2>
            <p class="text-secondary">Quando qualcuno esegue una ricerca, i motori di ricerca setacciano il loro indice alla ricerca di contenuti altamente pertinenti e quindi ordinano quel contenuto nella speranza di risolvere la query del ricercatore. Questo ordinamento dei
                risultati di ricerca per pertinenza è noto come ranking. In generale, puoi presumere che più alto è il ranking di un sito web, più il motore di ricerca ritiene che il sito sia pertinente alla <router-link to="/glossario">query</router-link>.
                <br/><br/> È possibile bloccare i crawler dei motori di ricerca da parte o tutto il tuo sito, o istruire i motori di ricerca per evitare di memorizzare determinate pagine nel loro indice. Anche se possono esserci delle ragioni per farlo,
                se si vuole che i propri contenuti vengano trovati dai ricercatori, bisogna prima assicurarsi che siano accessibili ai crawler e che siano indicizzabili.
            </p>
        </section>
        <section>
            <h2 class="text-primary" id="ott">In che modo classificano gli URL?</h2>
            <p class="text-secondary">Per determinare la pertinenza, i motori di ricerca utilizzano <router-link to="/glossario">algoritmi</router-link>, un processo o una formula mediante il quale le informazioni archiviate vengono recuperate e ordinate in modo significativo. Questi
                algoritmi hanno subito molti cambiamenti nel corso degli anni al fine di migliorare la qualità dei risultati di ricerca. Google, ad esempio, apporta modifiche all'algoritmo ogni giorno: alcuni di questi aggiornamenti sono modifiche di
                qualità minori, mentre altri sono aggiornamenti di algoritmi principali implementati per affrontare un problema specifico, come Penguin per contrastare lo spam nei <router-link to="/altro">link</router-link>.
                <br/><br/> Perché l'algoritmo cambia così spesso? Sebbene Google non riveli sempre i dettagli sul motivo per cui fanno quello che fanno, sappiamo che l'obiettivo di Google quando apporta modifiche all'algoritmo è migliorare la qualità
                complessiva della ricerca
            </p>
        </section>
        <form action="index.html#/altro">
            <input type="submit" value="Avanti" />
        </form>
    </main>
    <aside class="scaf">
        <img src="./img/seo.png" alt="" />
    </aside>
    `
};

const Altro = {
    template: `
    <main>
        <div><img src="./img/barra.jpg" alt="" /></div>
        <section>
            <h2 class="text-primary" id="primo">Il ruolo dei link nella SEO</h2>
            <p class="text-secondary" id="">Quando si parla di link, si possono intendere due cose. I backlink o "link interni" sono collegamenti da altri siti Web che puntano al proprio sito Web, mentre i collegamenti interni sono collegamenti al proprio sito che puntano ad altre pagine
                (sullo stesso sito).
                <br/><br/> I link hanno storicamente svolto un ruolo importante nella SEO. Molto presto, i motori di ricerca avevano bisogno di aiuto per capire quali <router-link to="/glossario">URL</router-link> fossero più affidabili di altri per aiutarli
                a determinare come classificare i risultati di ricerca. Il calcolo del numero di collegamenti che puntano a un determinato sito li ha aiutati a farlo.
                <br/>
            </p>
            <div><img src="./img/link.PNG" alt="collegamento tra pagine" /></div>
            <p class="text-secondary">
                I backlink funzionano in modo molto simile ai passaparola nella vita reale.
                <br/> Recensione da altri = buon segnale di rilevanza
                <br/> Recensione dall'admin = di parte, quindi segno di rilevanza poco significativo
                <br/> Recensione da fonti irrilevanti o di bassa affidabilità = non un buon segno di rilevanza e può farti segnalare per spam
                <br/> Nessuna recensione = non chiaro
                <br/><br/> Questo è il motivo per cui è stato creato il PageRank. PageRank (parte dell'algoritmo principale di Google) è un <router-link to="/glossario">algoritmo</router-link> di analisi dei link che prende il nome da uno dei fondatori di Google,
                Larry Page. PageRank stima l'importanza di una pagina web misurando la qualità e la quantità dei link che puntano ad essa. Il presupposto è che più una pagina web è rilevante, importante e affidabile, più link avrà guadagnato.
            </p>
        </section>
        <section>
            <h2 class="text-primary" id="sec">Il ruolo dei contenuti nella SEO</h2>
            <p class="text-secondary">Non avrebbero senso i collegamenti se non indirizzassero i ricercatori a qualcosa. Quel qualcosa è contenuto! Il contenuto è più di semplici parole; è qualsiasi cosa destinata a essere consumata dai ricercatori: ci sono contenuti video, contenuti
                di immagini e, naturalmente, testo. Se i motori di ricerca sono macchine di risposta, il contenuto è il mezzo attraverso il quale i motori forniscono quelle risposte.
                </br>
                </br>
                Ogni volta che qualcuno esegue una ricerca, ci sono migliaia di risultati possibili, quindi in che modo i motori di ricerca decidono quali pagine il ricercatore troverà preziose? Una parte importante del determinare dove si classificherà la tua pagina
                per una determinata <router-link to="/glossario">query</router-link> è quanto bene il contenuto della tua pagina corrisponde all'intento della query. In altre parole, questa pagina corrisponde alle parole cercate e aiuta a svolgere
                il compito che il ricercatore stava cercando di svolgere?
                <br/><br/> A causa di questa attenzione alla soddisfazione degli utenti e alla realizzazione delle attività, non ci sono parametri di riferimento rigorosi su quanto dovrebbero essere lunghi i tuoi contenuti, quante volte dovrebbero contenere
                una parola chiave o cosa inserisci nei tag di intestazione. Tutti ciò gioca un ruolo importante per definire quanto la pagina performi bene durante la ricerca, ma l'attenzione dovrebbe essere sugli utenti che leggeranno il contenuto.
                <br/><br/> Oggi, con centinaia o addirittura migliaia di segnali di ranking, i primi tre sono rimasti abbastanza coerenti: link al tuo sito web (che fungono da segnali di credibilità di terze parti), contenuto on-page (contenuto di qualità
                che soddisfa l'intento di un ricercatore) e RankBrain.
            </p>
        </section>
        <section>
            <h2 class="text-primary" id="terzo">Cos'è RankBrain?</h2>
            <p class="text-secondary">RankBrain è il componente di apprendimento automatico dell'<router-link to="/glossario">algoritmo</router-link> principale di Google. Il Machine learning è un programma per computer che continua a migliorare le sue previsioni nel tempo attraverso
                nuove osservazioni e dati di addestramento. In altre parole, impara sempre e, poiché impara sempre, i risultati della ricerca dovrebbero migliorare costantemente.
                </br>
                </br>
                Ad esempio, se RankBrain nota un <router-link to="/glossario">URL</router-link> con un ranking più basso che fornisce un risultato migliore agli utenti rispetto agli URL con un ranking più alto, RankBrain regolerà quei risultati, spostando il
                risultato più rilevante più in alto e retrocedendo le pagine meno rilevanti come sottoprodotto.
            </p>
            <div><img src="./img/rankbrain.PNG" alt="spostamento di rank" /></div>
        </section>
        <form action="/">
            <input type="submit" value="Indietro" />
        </form>
    </main>
    <aside class="scaf">
        <img src="./img/url.jpg" alt="" />
    </aside>
    `
};


const Glossario = {
    data() {
        return {
            vocabolario: null
        }
    },
    template: `
    <main class="piccolo">
        <div><img src="./img/libreria.PNG" alt="" /></div>
        <section v-for="parola in vocabolario">
            <h2 class="text-primary" v-bind:id="parola.Codice">{{parola.Nome}}</h2>
            <p class="text-secondary">{{parola.Descrizione}}</p>
        </section>
        <form action="/">
            <input type="submit" value="Torna alla Home" />
        </form>
    </main>
    <aside class="scaf">
        <img src="./img/scaffale.png" alt="">
    </aside> 
     `,
    methods: {
        getData: function() {
            axios.get("./termini.json")
                .then(response => {
                    console.log(response.data);
                    this.vocabolario = response.data
                });
        }
    },
    mounted() {
        this.getData();
    }

};

const Ricerche = {
    data() {
        return {
            cercati: [{ "nome": "youtube", "ricerche": 1163000000 }, { "nome": "facebook", "ricerche": 1033000000 }, { "nome": "google", "ricerche": 513000000 }, { "nome": "whatsapp web", "ricerche": 490000000 }, { "nome": "weather", "ricerche": 400000000 }, { "nome": "never gonna give you up", "ricerche": 18564350 }],
            selected: 0
        }
    },
    template: `
    <main class="cerca">
        <section>
            <div style="overflow-x:auto;">
                <table v-if="cercati!=null">
                    <tr>
                        <th scope="col">
                            <h2>Parole Chiave</h2>
                        </th>
                        <th scope="col">
                            <h2>Ricerche Mensili</h2>
                        </th>
                    </tr>
                    <tr v-for="parola in cercati">
                        <td class="text-secondary">{{parola.nome}}</td>
                        <td class="text-secondary">{{parola.ricerche}}</td>
                    </tr>
                </table>
            </div>
        </section>
        <section>
            <form>
                <h2>Modifica Ricerca</h2>
                <ul>
                    <li>
                        <label for="ricerca_selezionata" class="text-secondary">Ricerca da modificare:</label>
                        <select id="ricerca_selezionata" v-model="selected">
                          <option v-for="(parola, index) in cercati" v-bind:value="index">{{parola.nome}}</option>
                        </select>
                    </li>
                    <li>
                        <label for="nome" class="text-secondary" id="par">Parola:</label>
                        <input v-model="cercati[selected].nome" type="text" name="nome" id="nome" />
                    </li>
                    <br/>
                    <li>
                        <label for="ricerche" class="text-secondary">Ricerche:</label>
                        <input v-model="cercati[selected].ricerche" type="number" name="ricerche" id="ricerche" />
                    </li>
                </ul>
            </form>
        </section>
    </main>
    <aside class="bordo">
        <img src="./img/cerca.PNG" alt="come la gente cerca" usemap="#rick">
        <map name="rick">
            <area shape="rect" coords="0 0 1000 1000" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" alt="never gonna give you up">
        </map>
    </aside>
   `
};



const routes = [
    { path: '/', component: Home },
    { path: '/altro', component: Altro },
    { path: '/glossario', component: Glossario },
    { path: '/ricerche', component: Ricerche }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            const position = {};
            if (to.hash) {
                position.selector = to.hash;
                return false;
            }
        }
    }

});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');