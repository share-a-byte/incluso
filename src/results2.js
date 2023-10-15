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
        name: 'GUMBOS and nanoGUMBOS in chemical and biological analysis: A review',
        author: "Isiah Warner",
        date: "July 2020",
        image: search,
        description: "GUMBOS (group of uniform materials based on organic salts) is a novel class of materials that exhibits similar features to those of ionic liquids, but have melting points between 25 and 250 °C. GUMBOS can be easily converted into nanomaterials (nanoGUMBOS), with advantages of working at nanoscale. Due to the huge number of possible cation-anion combinations, these materials can be multifunctional and designed for a specific task. This review highlights the possibility of fine-tuning GUMBOS physical and chemical properties in view of changing their ionic counterparts. Their outstanding potential for analytical applications is shown through recent developments in areas such as sensing, and solid-phase extraction....",
        tags: "Black, Male"
    },
    {
        name: 'Final report on CCQM-K27.2: Second Subsequent study: determination of ethanol in aqueous media',
        author: "Willie E. May",
        date: "January 2013",
        image: search2,
        description: "Ethanol is important both forensically ('drunk driving' or driving while under the influence, 'DWI', regulations) and commercially (alcoholic beverages). Blood- and breath-alcohol testing can be imposed on individuals operating private vehicles such as cars, boats or snowmobiles, or operators of commercial vehicles like trucks, planes and ships. The...",
        tags: "Black, Male"
    },
    {
        name: 'Chemical etching of nanocomposite metal-semiconductor films monitored by Raman spectroscopy and surface probe microscopy',
        author: "James W. Mitchell",
        date: "February 2008",
        image: search3,
        description: "The complementary tools of atomic force microscopy (AFM) and Raman spectroscopy are used to extract information on the microstructural properties of nanocomposite n-doped Si (n-Si) and Ag/n-Si films deposited on Si(111) substrates at 400 °C and 550 °C. AFM measurements indicated that Ag/n-Si films had grain sizes and roughness values one order of m...",
        tags: "Black, Male"
    },
    {
        name: "Aromatic character of tria-and pentafulvene and their exocyclic Si, Ge, and Sn derivatives. An ab initio study",
        author: "Zakiya S. Wilson-Kennedy",
        date: "Feburary 1999",
        image: search4,
        description: "The structures and dipole moments have been calculated for both methylenecyclopropene (triafulvene) and pentafulvene and their exocyclic Si, Ge, and Sn analogues 1a−d and 2a−d, respectively. Ab initio calculations employing the HF, DFT, and MP2 methods, each using split valence plus polarization and triple split valence with two sets of polarization functions basis sets, have been performed. The results of these six levels of theory on each of the eight molecules were compared, and the aromatic character of these systems was examined...",
        tags: "Black, Female"
    },
    {
        name: "Effect of Pharmacist Home Visits on Weight Control in Overweight Elderly Hypertensive African American Patients: Managing Your Blood Pressure (My Bp) Program",
        author: "Aisha Morris Moultry",
        date: "October 2021",
        image: search5,
        description: "The objective was to investigate the effect of a home-based pharmacy intervention on body mass index (BMI) in a cohort of older hypertensive overweight African American (AA) patients. Design: A secondary analysis of data collected in a community-based intervention study. Setting: Community-based. Participants: AA patients, ≥ 65 years old, residing independently, with hypertension diagnosis and BMI ≥ 25...",
        tags: "Black, Female"
    },
]

export default function Results2() {
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