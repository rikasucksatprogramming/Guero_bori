// Mini Game 
// Initialized 
const genBtn = document.getElementById("gen");
const resultOutput = document.getElementById("result");

const posResults = [
    "Description: On Palm Sunday, March 21, 1937, a peaceful march organized by the Puerto Rican Nationalist Party in Ponce was fired upon by the insular police, resulting in 19 deaths and hundreds wounded. Denis highlights this as a brutal act of repression against a political movement seeking independence.
Comparison to US History: The Ludlow Massacre (1914)
Similarity: In Ludlow, Colorado, striking coal miners and their families were attacked by the Colorado National Guard and Colorado Fuel and Iron Company guards, resulting in numerous deaths, including women and children. Both events involved state-sanctioned violence against a group advocating for their rights, leading to significant loss of life and a legacy of injustice. Both were attempts to suppress dissent and maintain existing power structures.
",
    "Description: This law made it a crime to advocate for Puerto Rican independence, display the Puerto Rican flag, or sing patriotic songs. It was a severe restriction on freedom of speech and assembly, designed to stifle the nationalist movement.

Comparison to US History: The Sedition Act of 1918
Similarity: Enacted during World War I, the Sedition Act made it illegal to utter, print, write, or publish any disloyal, profane, scurrilous, or abusive language about the US government or war effort. Both the Gag Law and the Sedition Act were legislative attempts to quash political dissent and suppress speech deemed threatening to the state, even if it involved non-violent expression.",
    "Description: During the 1950 Nationalist Revolts, Nationalists in Utuado declared the Republic of Puerto Rico. The town was subsequently bombed and attacked by US forces, including aerial bombardment, a significant escalation of force against a civilian population.
Comparison to US History: The Bombing of Tulsa's Black Wall Street (1921)
Similarity: In Tulsa, Oklahoma, a prosperous African American community was attacked by a white mob, and private planes were used to drop incendiary devices on the area. While the contexts differ (colonial suppression vs. racial violence), both events involve the use of aerial bombardment or overwhelming force against a specific community, resulting in widespread destruction, death, and the suppression of a group's aspirations or existence.",
    "Description: Nelson Denis details the repeated imprisonment and harsh treatment of Nationalist leaders, particularly Pedro Albizu Campos, who suffered greatly from alleged radiation poisoning while incarcerated. This reflects the systematic targeting and incapacitation of political opposition.
Comparison to US History: Internment of Japanese Americans during WWII (1942-1946)
Similarity: Following the attack on Pearl Harbor, over 120,000 Japanese Americans, many of them US citizens, were forcibly removed from their homes and incarcerated in internment camps without due process. While the motivations differed (suppression of independence vs. wartime hysteria and racial prejudice), both situations involved the mass detention and systematic targeting of a specific ethnic or political group, stripping them of their civil liberties and subjecting them to prolonged confinement without charges or fair trials.",
    "Description: Denis frames the entire narrative within the context of Puerto Rico's ongoing colonial status and the US's reluctance to grant full independence or statehood, thereby perpetuating a system where Puerto Ricans lack full self-determination.
Comparison to US History: The Cherokee Nation and the "Trail of Tears" (1838-1839)
Similarity: The forced removal of the Cherokee Nation from their ancestral lands in the southeastern US, despite treaties and the Supreme Court's ruling, exemplifies the US government's history of dispossessing and denying self-determination to indigenous populations. While the specific outcomes differ (colonial status vs. forced removal), both situations illustrate a pattern of a powerful nation asserting control over and denying the sovereign rights of another distinct people, prioritizing its own interests over the self-determination of the marginalized group.
",
];

genBtn.onclick = function(){
    const randomIndex = Math.floor(Math.random() * posResults.length);
    const randomSnippet = posResults[randomIndex];
    resultOutput.textContent = randomSnippet;
}
