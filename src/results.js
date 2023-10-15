import { Grid, Divider } from 'semantic-ui-react';
import OneResult from './one_result';
import './styles.css'
import search from './images/search.png';
import search2 from './images/search2.png';
import search3 from './images/search3.png';
import search4 from './images/search4.png';
import search5 from './images/search5.png';

const articles = [
    {
        name: 'A Josephson quantum phase battery',
        author: "Cristina Sanz-Fernández:",
        date: "January 2020",
        image: search,
        description: "A battery is a classical apparatus which converts a chemical reaction into a persistent voltage bias able to power electronic circuits. Similarly, a phase battery is a quantum equipment which provides a persistent phase bias to the wave function of a quantum circuit. It represents a key element for quantum technologies based on quantum coherence. Unlike the voltage batteries, a phase battery has not been implemented so far, mainly because of the natural rigidity of the quantum phase that, in typical quantum circuits, is imposed by the parity and time-reversal symmetry constrains. Here we report on the first experimental realization of a phase battery in a hybrid superconducting circuit. It consists of an n-doped InAs nanowire with unpaired-spin surface states and proximitized by Al superconducting leads. We find that the ferromagnetic polarization of the unpaired-spin states is efficiently converted into a persistent phase bias…",
        tags: "Latinx, Women"
    },
    {
        name: 'Atom Tunneling in the Hydroxylation Process of Taurin Alpha-Ketoglutarate Dioxygenase Identified by Quantum Mechanics/Molecular Mechanics Simulations',
        author: "Sonia Álvarez-Barcia",
        date: "September 2020",
        image: search2,
        description: "Taurine/α-ketoglutarate dioxygenase is one of the most studied α-ketoglutarate-dependent dioxygenases (αKGDs), involved in several biotechnological applications. We investigated the key step in the catalytic cycle of the αKGDs, the hydrogen transfer process, by a quantum mechanics/molecular mechanics approach (B3LYP/CHARMM22). Analysis of the charge and spin densities during the reaction demonstrates that a concerted mechanism takes place, where the H atom transfer happens simultaneously with the electron transfer from taurine to the Fe═O cofactor. We found the quantum tunneling of the hydrogen atom to increase the rate constant by a factor of 40 at 5 °C. As a consequence, a quite high kinetic isotope effect close to 60 is obtained, which is consistent with the experimental value.",
        tags: "Latinx, Women"
    },
    {
        name: 'Robust quantum entanglement generation and generation-plus-storage protocols with spin chains',
        author: "Marta P Esterellas",
        date: "April 2017",
        image: search3,
        description: "Reliable quantum communication and/or processing links between modules are a necessary building block for various quantum processing architectures. Here we consider a spin-chain system with alternating strength couplings and containing three defects, which impose three domain walls between topologically distinct regions of the chain. We show that—in addition to its useful, high-fidelity, quantum state transfer properties—an entangling protocol can be implemented in this system, with optional localization and storage of the entangled states. We demonstrate both numerically and analytically that, given a suitable initial product-state injection, the natural dynamics of the system produces a maximally entangled state at a given time. We present detailed investigations of the effects of fabrication errors, analyzing random static disorder both in the diagonal and off-diagonal terms of the system Hamiltonian. Our …",
        tags: "Latinx, Women"
    },
    {
        name: 'The quantum ecosystem and its future workforce: A journey through the funding, the hype, the opportunities, and the risks related to the emerging field of quantum technologies',
        author: "Araceli Venegas-Gomez",
        date: "December 2020",
        image: search4,
        description: "There is no doubt, we are entering the second quantum revolution. Every week some exciting news about quantum technologies appears in the media. Nowadays, several countries worldwide have initiated a quantum program to develop this emerging market. However, this will require having a highly trained and skilled workforce. How can society be ready when the time comes?",
        tags: "Latinx, Women"
    },
    {
        name: 'Fault-tolerant parity readout on a shuttling-based trapped-ion quantum computer',
        author: "Andrea Rodriguez-Blanco",
        date: "February 2022",
        image: search5,
        description: "Quantum error correction requires the detection of errors via reliable measurements of multiqubit correlation operators. As these operations are inherently faulty, fault-tolerant schemes for realizing quantum error correction are required. Recently, a paradigm requiring only minimal resource overhead in the form of “flag” qubits to detect and correct errors has been proposed. We experimentally demonstrate a fault-tolerant weight-4 parity-check measurement scheme, where one additional flag qubit serves to detect errors, which would otherwise proliferate into uncorrectable weight-2 errors onto the qubit register. We achieve a parity measurement fidelity of 92.3 (2)%, which increases to 93.2 (2)% upon conditioning to the flag readout result, which shows that the measurement scheme intercepts intrinsic errors occurring throughout the sequence. We show that the protocol is capable of reliably intercepting faults by …",
        tags: "Latinx, Women"
    },
]

export default function Results() {
    return (
        <div>
            <Divider hidden />
            <Grid>
                <OneResult article_name={articles[0].name} article_date={articles[0].date} image={articles[0].image} description={articles[0].description} tags={articles[0].tags} author={articles[0].author}></OneResult>
                <OneResult article_name={articles[1].name} article_date={articles[1].date} image={articles[1].image} description={articles[1].description} tags={articles[1].tags} author={articles[1].author}></OneResult>
                <OneResult article_name={articles[2].name} article_date={articles[2].date} image={articles[2].image} description={articles[2].description} tags={articles[2].tags} author={articles[2].author}></OneResult>
                <OneResult article_name={articles[3].name} article_date={articles[3].date} image={articles[3].image} description={articles[3].description} tags={articles[3].tags} author={articles[3].author}></OneResult>
                <OneResult article_name={articles[4].name} article_date={articles[4].date} image={articles[4].image} description={articles[4].description} tags={articles[4].tags} author={articles[4].author}></OneResult>

            </Grid>
            <Divider hidden />
            <div className="bottom-text">
                <p><span className="underlined">1</span> | 2 | 3 ...</p>
            </div>
            <Divider hidden />
            <Divider hidden />
        </div>
    );
}