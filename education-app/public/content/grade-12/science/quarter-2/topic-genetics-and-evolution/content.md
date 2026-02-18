# Genetics and Evolution

## Introduction

Genetics and evolution represent two of the most profound and interconnected fields in modern biology. Genetics—the study of inheritance and heredity—explains how traits pass from parents to offspring and how variations arise within populations. Evolution—the process of change over time—accounts for the diversity of life and the relationships between all organisms. Together, these concepts form the foundation of our understanding of life itself.

For the UPCAT, mastery of Mendelian genetics, Punnett square analysis, and the molecular basis of heredity is essential. You must be comfortable with monohybrid and dihybrid crosses, understand patterns of inheritance beyond simple dominance, and apply Chargaff's rules to DNA composition problems. Additionally, you must recognize evolutionary evidence in the form of homologous and analogous structures, and understand how natural selection shapes populations over time.

This module will equip you with both the computational skills to solve genetics problems and the conceptual understanding to appreciate the evidence for evolution. Pay special attention to the distinctions between different inheritance patterns and the logical flow of Punnett square analysis, as these are frequent sources of error on standardized exams.

## Mendelian Genetics: Fundamental Concepts

Gregor Mendel's work in the 1860s established the principles of heredity through careful experiments with pea plants. His insights remain the foundation of modern genetics.

### Key Genetic Terminology

**Gene:** A segment of DNA on a chromosome that encodes instructions for a specific trait. Genes are units of heredity.

**Allele:** Alternative forms of a gene. For example, the gene for flower color in peas has alleles for red and white. Different alleles produce different phenotypes.

**Dominant allele:** An allele that is expressed when present in at least one copy. Denoted by a capital letter (e.g., T for tall in peas).

**Recessive allele:** An allele that is only expressed when two copies are present (i.e., in the homozygous recessive condition). Denoted by a lowercase letter (e.g., t for short).

**Genotype:** The genetic makeup of an organism; the combination of alleles for a particular gene or trait. For example: TT, Tt, or tt. Genotypes are not visible; they are determined by genetic testing or pedigree analysis.

**Phenotype:** The observable characteristics or traits of an organism; the result of both genotype and environmental factors. For example: tall or short plant height. Phenotypes are what we directly observe.

**Homozygous:** Having two identical alleles for a gene (TT or tt). An organism is homozygous dominant (TT) or homozygous recessive (tt).

**Heterozygous:** Having two different alleles for a gene (Tt). Heterozygous organisms are also called hybrids.

### Mendel's Law of Segregation

Mendel's Law of Segregation states that allele pairs separate during gamete (sex cell) formation, with each gamete receiving one allele from each pair.

**Implication:** During meiosis, homologous chromosomes separate, and each gamete receives only one allele for each gene. During fertilization, gametes fuse, restoring the pair of alleles in the offspring.

**Mathematical consequence:** In a monohybrid cross (Tt × Tt):
- Each parent can produce two types of gametes: T or t
- Offspring receive one allele from each parent
- Expected ratio of genotypes: 1 TT : 2 Tt : 1 tt
- Expected ratio of phenotypes (assuming T is dominant): 3 dominant : 1 recessive

### Mendel's Law of Independent Assortment

Mendel's Law of Independent Assortment states that genes located on different chromosomes are inherited independently during gamete formation.

**Application:** In a dihybrid cross involving two traits on different chromosomes, the inheritance of one trait does not affect the inheritance of the other.

**Mathematical consequence:** In a dihybrid cross (TtRr × TtRr):
- Each parent produces four types of gametes: TR, Tr, tR, tr
- The phenotypic ratio is 9:3:3:1
  - 9/16 dominant for both traits
  - 3/16 dominant for first trait only
  - 3/16 dominant for second trait only
  - 1/16 recessive for both traits

**Note:** Genes on the same chromosome (linked genes) violate this law due to linkage and crossing over.

## Punnett Squares and Monohybrid Crosses

The Punnett square is a simple graphical method for predicting the genotypes and phenotypes of offspring from a cross.

### Monohybrid Cross Analysis

A monohybrid cross involves one trait controlled by one gene with two alleles.

**Example: Tall (T) vs. Short (t) in peas**

Consider a cross between a heterozygous tall plant (Tt) and a homozygous recessive short plant (tt).

Set up the Punnett square:
- Parent 1 (Tt) contributes T or t
- Parent 2 (tt) contributes only t

|   | t   | t   |
|---|-----|-----|
| T | Tt  | Tt  |
| t | tt  | tt  |

**Genotypic ratio:** 1 Tt : 1 tt (or 50% heterozygous, 50% homozygous recessive)
**Phenotypic ratio:** 1 tall : 1 short (or 50% tall, 50% short)

This is a **testcross**—a cross between a dominant phenotype and a homozygous recessive.

### The Classic Monohybrid Cross: Tt × Tt

|   | T   | t   |
|---|-----|-----|
| T | TT  | Tt  |
| t | Tt  | tt  |

**Genotypic ratio:** 1 TT : 2 Tt : 1 tt
**Phenotypic ratio:** 3 tall : 1 short

The 3:1 ratio is one of the most characteristic patterns in Mendelian genetics. The 2 Tt individuals are heterozygous and express the dominant phenotype, while the 1 tt individual is homozygous recessive and expresses the recessive phenotype.

### Using Testcrosses to Determine Genotype

The testcross is a powerful tool for determining whether a dominant phenotype is homozygous (TT) or heterozygous (Tt).

**If an organism with dominant phenotype × tt gives:**
- All dominant offspring → original organism is TT (homozygous)
- ~50% dominant, ~50% recessive offspring → original organism is Tt (heterozygous)

This principle is frequently tested on the UPCAT.

## Dihybrid Crosses and the 9:3:3:1 Ratio

A dihybrid cross involves two traits controlled by two different genes.

### Setting Up a Dihybrid Cross

**Example:** TtRr (heterozygous for both traits) × TtRr

Each parent (TtRr) produces four types of gametes: **TR, Tr, tR, tr** (each with probability 1/4)

The Punnett square is 4×4 (16 boxes):

|      | TR   | Tr   | tR   | tr   |
|------|------|------|------|------|
| TR   | TTRR | TTRr | TtRR | TtRr |
| Tr   | TTRr | TTrr | TtRr | Ttrr |
| tR   | TtRR | TtRr | ttRR | ttRr |
| tr   | TtRr | Ttrr | ttRr | ttrr |

### Interpreting the 9:3:3:1 Ratio

Count the phenotypes:
- **9/16** with dominant phenotypes for BOTH traits (T_R_)
- **3/16** with dominant for first trait, recessive for second (T_rr)
- **3/16** with recessive for first trait, dominant for second (ttR_)
- **1/16** with recessive phenotypes for BOTH traits (ttrr)

This 9:3:3:1 ratio is the classic dihybrid ratio and results from the independent inheritance of two genes.

**Key insight:** You can verify this by considering each trait independently:
- Tt × Tt gives 3 dominant : 1 recessive for each trait
- Combined: (3:1) × (3:1) = 9:3:3:1

## Non-Mendelian Inheritance Patterns

While Mendel's laws account for many inheritance patterns, some traits show different patterns due to gene interactions, multiple alleles, or chromosomal effects.

### Incomplete Dominance

In incomplete dominance, neither allele is completely dominant over the other. The heterozygous phenotype is intermediate between the two homozygous phenotypes.

**Example:** Red flowers (RR) × White flowers (WW) → Pink flowers (RW)

**Important distinction:** With incomplete dominance, you can distinguish the heterozygote from the homozygotes. The phenotypic ratio in an F1 × F1 cross is **1:2:1** (same as genotypic ratio).

|   | R  | W  |
|---|----|----|
| R | RR | RW |
| W | RW | WW |

**Offspring phenotypes:**
- 1 Red (RR)
- 2 Pink (RW)
- 1 White (WW)

### Codominance

In codominance, both alleles are fully expressed simultaneously in the heterozygote. Neither allele is recessive.

**Example:** Blood type AB (I^A I^B) — both A and B antigens are expressed on red blood cells simultaneously.

**Key characteristic:** The heterozygote displays BOTH phenotypes at the same time, rather than an intermediate phenotype.

### The ABO Blood Type System: A Complex Example

The ABO blood type system is controlled by a gene with multiple alleles and shows both codominance and dominance relationships.

**Alleles:**
- I^A codes for A antigen
- I^B codes for B antigen
- i codes for neither antigen (recessive)

**Dominance relationships:**
- I^A and I^B are codominant to each other
- Both I^A and I^B are dominant to i

**Possible genotypes and phenotypes:**

| Genotype | Phenotype |
|----------|-----------|
| I^A I^A or I^A i | Type A |
| I^B I^B or I^B i | Type B |
| I^A I^B | Type AB |
| ii | Type O |

**Clinical significance:** Blood type is critical for blood transfusions. Type O (ii) is the universal donor because it lacks both A and B antigens. Type AB (I^A I^B) is the universal recipient because it has both antigens and won't attack donor cells.

**UPCAT example:** If a father has type AB blood (I^A I^B) and a mother has type O blood (ii), what blood types can their children have?

Father (I^A I^B) can produce gametes: I^A or I^B
Mother (ii) can produce gametes: i only

Offspring:
- I^A i → Type A
- I^B i → Type B

Children cannot be type O or type AB; they can only be type A or type B.

### Sex-Linked Inheritance

Genes located on the X chromosome show a different inheritance pattern than autosomal genes, particularly in diploid organisms like humans where males have one X and females have two Xs.

**Key characteristics:**
- Males (XY) need only one copy of an X-linked recessive allele to express the trait
- Females (XX) need two copies to express an X-linked recessive trait
- Males cannot be carriers; they either have the trait or don't
- Affected males pass the trait to all daughters (who become carriers if father is affected and mother is homozygous dominant)

**Common X-linked traits:** Color blindness, hemophilia, Duchenne muscular dystrophy

## DNA Structure and Chargaff's Rules

Understanding the structure of DNA and the base-pairing rules is essential for UPCAT success, particularly for problems involving base composition.

### The DNA Molecule

DNA (deoxyribonucleic acid) is a double helix polymer composed of:
- **Sugar:** Deoxyribose (a 5-carbon sugar)
- **Phosphate groups:** Link the sugars in the backbone
- **Nitrogenous bases:** Purines (adenine [A], guanine [G]) and pyrimidines (thymine [T], cytosine [C])

### Base Pairing Rules

DNA exists as a double helix with two antiparallel strands held together by hydrogen bonds between bases.

**Base pairing rules (Watson-Crick):**
- Adenine (A) pairs with thymine (T) — **2 hydrogen bonds**
- Guanine (G) pairs with cytosine (C) — **3 hydrogen bonds**

**Key consequence:** A pairs exclusively with T, and G pairs exclusively with C. These are called complementary base pairs.

### Chargaff's Rules

Erwin Chargaff discovered that the amount of each base in a DNA sample follows specific mathematical relationships:

**Chargaff's First Rule:**
- %A = %T (the percentage of adenine equals the percentage of thymine)
- %G = %C (the percentage of guanine equals the percentage of cytosine)

**Chargaff's Second Rule:**
- %A + %T + %G + %C = 100% (the four bases account for all nucleotides)

**Consequence:** %A + %G = %T + %C = 50%

### Solving Chargaff Problems: A Step-by-Step Approach

**Example 1:** A DNA sample contains 30% adenine. What percentages of thymine, guanine, and cytosine are present?

**Solution:**
- If %A = 30%, then %T = 30% (by Chargaff's first rule)
- %A + %T = 30% + 30% = 60%
- %G + %C = 100% - 60% = 40%
- Since %G = %C (by Chargaff's first rule), each is 40%/2 = 20%

**Answer:** %T = 30%, %G = 20%, %C = 20%

**Example 2:** A DNA sample has 28% guanine. What percentage of adenine is present?

**Solution:**
- If %G = 28%, then %C = 28% (by Chargaff's first rule)
- %G + %C = 28% + 28% = 56%
- %A + %T = 100% - 56% = 44%
- Since %A = %T, each is 44%/2 = 22%

**Answer:** %A = 22%

These problems appear frequently on the UPCAT, so practice until the logic becomes automatic.

## Evidence for Evolution: Homologous and Analogous Structures

Evolution is the process of genetic change in populations over time. One of the strongest lines of evidence for evolution comes from comparative anatomy—the study of structural similarities and differences among organisms.

### Homologous Structures

Homologous structures are body parts that have similar anatomy and developmental origin but different functions. They indicate common ancestry.

**Examples:**
- Human arm, whale flipper, bat wing, dog leg — all have the same basic bone structure: humerus, radius, ulna, carpals, metacarpals, phalanges
- Bird wings and penguin flippers (though one is used for flight and the other for swimming)
- Vertebrate forelimbs (the pentadactyl limb plan: five fingers/toes)

**Evolutionary interpretation:** These structures were inherited from a common ancestor but diverged in function as populations adapted to different environments. This is called **divergent evolution**.

**Mechanism:** Natural selection favored different modifications of the ancestral limb structure in different lineages. In humans, the limb became specialized for manipulation; in whales, for swimming; in bats, for flight.

### Analogous Structures

Analogous structures are body parts that perform similar functions but have different evolutionary origins and different anatomy. They indicate convergent evolution, not common ancestry.

**Examples:**
- Bird wings and insect wings — both used for flight, but different anatomy (bird wings have bones and feathers; insect wings are chitinous membranes)
- Fish fins and dolphin flippers — both used for swimming, but fins are not homologous to flippers (though dolphins are mammals and do have limb bones in their flippers)
- Plant roots and plant shoots — different structures serving different functions

**Evolutionary interpretation:** Analogous structures arise through **convergent evolution**—when different organisms facing similar environmental pressures independently evolve similar solutions. This is NOT evidence of recent common ancestry.

### Key Distinction for UPCAT Success

| Feature | Homologous | Analogous |
|---------|-----------|-----------|
| **Origin** | Same evolutionary origin | Different evolutionary origins |
| **Anatomy** | Similar structure | Different structure |
| **Function** | Often different | Often similar |
| **Evidence** | Common ancestry | Convergent evolution |

**UPCAT example:** Bat wings (homologous to human arms) and butterfly wings (analogous to bat wings) — the bat wing is homologous to the human arm but analogous to the butterfly wing.

### Vestigial Structures

Vestigial structures are remnants of structures that had an important function in ancestral organisms but have lost most or all of their original function in modern organisms.

**Examples:**
- Human tailbone (coccyx) — remnant of a tail present in our evolutionary ancestors
- Human appendix — has a reduced role in digestion compared to its function in herbivorous ancestors
- Whale hip bones — remnant of legs present in land-dwelling ancestors
- Snake pelvic girdle — remnant of limbs

**Evolutionary interpretation:** The presence of vestigial structures is strong evidence for evolution. Why would a Creator design organisms with useless structures? But evolution explains them as remnants of ancestral structures no longer needed.

### Embryological Evidence

Embryological similarities also support evolution:
- Vertebrate embryos show remarkable similarities in early development
- All vertebrate embryos have pharyngeal gill slits (arches) at some point, even terrestrial species
- These similarities reflect common ancestry; different taxa develop these structures differently based on their evolutionary lineage

## Natural Selection and Evolutionary Change

Natural selection is the mechanism proposed by Darwin to explain how evolution occurs.

### The Four Principles of Natural Selection

1. **Variation:** Individuals within a population show variation in traits (due to different alleles)

2. **Heredity:** Some variations are heritable (controlled by genes that can be passed to offspring)

3. **Differential reproduction:** Individuals with traits better suited to their environment tend to survive longer and reproduce more successfully

4. **Change in allele frequency:** Over generations, beneficial alleles become more common in the population, while harmful alleles become less common

### Fitness and Adaptation

**Fitness** in evolutionary biology refers to reproductive success—the number of viable offspring an organism produces relative to others in the population.

**Adaptation** is a trait that increases an organism's fitness in its particular environment. Adaptations arise through natural selection over many generations.

**Example:** In a population of beetles, if bird predators prefer to eat green beetles, brown beetles will survive and reproduce more successfully. Over generations, the brown allele becomes more common, and the population becomes darker on average. The brown coloration is an adaptation to the local environment.

## Worked Examples

### Example 1: Monohybrid Cross and Punnett Square

**Question:** A pea plant that is heterozygous for flower color (Rr, red is dominant) is crossed with a white flower plant (rr). Predict the genotypes and phenotypes of the offspring.

**Solution:**

|   | r   | r   |
|---|-----|-----|
| R | Rr  | Rr  |
| r | rr  | rr  |

**Genotypes:** 1 Rr : 1 rr (50% heterozygous, 50% homozygous recessive)
**Phenotypes:** 1 red : 1 white (50% red, 50% white)

This is a testcross. Since the result shows 1:1 ratio, we can confirm the heterozygous parent was indeed Rr (not RR).

### Example 2: Dihybrid Cross

**Question:** A plant heterozygous for both seed color (Yy, yellow is dominant) and seed texture (Ss, smooth is dominant) is self-fertilized (YySs × YySs). What fraction of offspring will have yellow, smooth seeds?

**Solution:** For independent traits:
- Probability of yellow (Y_) = 3/4 (from Yy × Yy)
- Probability of smooth (S_) = 3/4 (from Ss × Ss)
- Probability of yellow AND smooth = 3/4 × 3/4 = 9/16

You can also use the dihybrid Punnett square to verify the 9:3:3:1 ratio.

### Example 3: Chargaff's Rules

**Question:** A DNA sample contains 35% cytosine. What percentage of adenine is present?

**Solution:**
- If %C = 35%, then %G = 35% (by Chargaff's first rule)
- %G + %C = 35% + 35% = 70%
- %A + %T = 100% - 70% = 30%
- Since %A = %T, each is 30%/2 = 15%

**Answer:** %A = 15%

### Example 4: Incomplete Dominance

**Question:** A red flower (RR) is crossed with a white flower (WW). If the F1 plants (RW) are self-fertilized, what are the phenotypes and their ratios in the F2 generation?

**Solution:** F1 (RW) × F1 (RW):

|   | R  | W  |
|---|----|----|
| R | RR | RW |
| W | RW | WW |

**F2 phenotypes:** 1 red : 2 pink : 1 white

**Key difference from simple dominance:** The phenotypic ratio (1:2:1) matches the genotypic ratio because the heterozygote has a distinguishable phenotype (pink).

### Example 5: Homologous vs. Analogous Structures

**Question:** Compare the human arm and the bat wing. Are they homologous or analogous structures? Why is this significant evolutionarily?

**Solution:** The human arm and bat wing are homologous structures. Both have the same basic bone structure (humerus, radius, ulna, carpals, metacarpals, phalanges), the same developmental origin, but different functions (manipulation vs. flight). This indicates that humans and bats share a common ancestor. The bones were inherited from that ancestor but modified for different functions—evidence of divergent evolution.

## UPCAT Tips & Common Mistakes

1. **Dominance vs. Recessiveness:** Remember that dominance is a relationship between alleles, not an absolute property. An allele that is dominant in one organism might be recessive in another.

2. **Punnett squares:** Always set up the square carefully with one parent across the top and the other down the side. Double-check the gamete combinations before counting phenotypes.

3. **Testcross results:** A 1:1 phenotypic ratio indicates the dominant phenotype is heterozygous (Aa). A testcross showing all dominant offspring indicates the dominant phenotype is homozygous (AA).

4. **Dihybrid ratios:** The 9:3:3:1 ratio assumes independent assortment (genes on different chromosomes). Linked genes will give different ratios.

5. **Chargaff's rules:** These rules apply specifically to double-stranded DNA. Single-stranded RNA does not follow these rules (A ≠ U, for example).

6. **Incomplete vs. complete dominance:** In incomplete dominance, the heterozygote is visibly intermediate. In complete dominance, the heterozygote resembles the homozygous dominant. Don't confuse these.

7. **Codominance:** Both alleles are fully expressed; you see BOTH phenotypes simultaneously in the heterozygote, not an intermediate phenotype.

8. **Homologous vs. Analogous:** The key is evolutionary origin, not current function. Homologous structures have the same origin (common ancestry); analogous structures have different origins but similar functions.

9. **Vestigial structures:** These are NOT useless; they may retain minor functions. They are most significant as evidence of evolution because they represent evolutionary baggage from ancestral organisms.

10. **Natural selection:** It operates on phenotypes (observable traits), not genotypes. However, only heritable variations can be acted upon by natural selection and lead to evolutionary change.

## Key Takeaways

- **Mendel's laws:** Segregation (allele pairs separate in gamete formation) and independent assortment (genes on different chromosomes are inherited independently)

- **Punnett squares:** Useful tools for predicting offspring genotypes and phenotypes. A 1:1 ratio in a testcross indicates heterozygosity; 3:1 indicates a standard monohybrid cross; 9:3:3:1 indicates a standard dihybrid cross.

- **Non-Mendelian patterns:** Incomplete dominance (heterozygote is intermediate), codominance (both alleles expressed), and multiple alleles (like ABO blood types) require careful analysis.

- **Chargaff's rules:** %A = %T and %G = %C; use these relationships to solve DNA composition problems systematically.

- **Homologous vs. analogous:** Homologous structures indicate common ancestry (divergent evolution); analogous structures indicate convergent evolution (independent evolution of similar solutions).

- **Natural selection:** The mechanism by which evolution occurs. Individuals with advantageous traits survive and reproduce more successfully, increasing the frequency of beneficial alleles in the population.

## Practice Problems

1. Two pea plants with round seeds (Rr) are crossed. What is the probability that an offspring will have round seeds (R_)?

2. A woman with type AB blood has a child with type O blood. What is the genotype of the father?

3. A DNA segment has 40% thymine. Calculate the percentages of adenine, guanine, and cytosine.

4. In a dihybrid cross (AaBb × AaBb), what fraction of offspring will be aaBB?

5. Explain why bird wings are homologous to human arms but analogous to butterfly wings.
