import type { Citation } from './types'

/**
 * SHARED citation registry — cross-cutting guideline/landmark sources reused
 * across many conditions. Condition modules also export their own
 * `citations: Citation[]`; conditions/index.ts merges everything into one map
 * and asserts that every referenced citationId resolves.
 *
 * INTEGRITY RULE: every `url` must be real and resolve, and `takeaway` must
 * faithfully represent the source. `verified` flips to true only after a
 * dedicated verification pass confirms the URL + claim. No fabricated sources.
 */
export const sharedCitations: Citation[] = [
  {
    id: 'aaos-knee-oa-cpg',
    label: 'AAOS Knee OA CPG',
    authorsOrOrg: 'American Academy of Orthopaedic Surgeons',
    source: 'AAOS Clinical Practice Guideline',
    year: 2021,
    type: 'guideline',
    url: 'https://www.aaos.org/quality/quality-programs/lower-extremity-programs/osteoarthritis-of-the-knee/',
    takeaway:
      'Exercise and self-management are central to knee osteoarthritis care; injectable therapies vary in evidence and patient fit.',
    verified: false,
  },
  {
    id: 'acr-oa-guideline',
    label: 'ACR/AF OA Guideline',
    authorsOrOrg: 'American College of Rheumatology / Arthritis Foundation',
    source: 'Arthritis Care & Research',
    year: 2020,
    type: 'guideline',
    url: 'https://rheumatology.org/osteoarthritis-guideline',
    takeaway:
      'Strongly recommends exercise and weight management for hip/knee OA; conditional or against recommendations for several injectables.',
    verified: false,
  },
  {
    id: 'nice-guidance',
    label: 'NICE guidance',
    authorsOrOrg: 'National Institute for Health and Care Excellence',
    source: 'NICE',
    year: 2022,
    type: 'guideline',
    url: 'https://www.nice.org.uk/guidance',
    takeaway:
      'Emphasizes safety, consent, and condition-specific efficacy for therapies such as shockwave; benefits are not uniform.',
    verified: false,
  },
  {
    id: 'nice-oa-ng226',
    label: 'NICE OA NG226',
    authorsOrOrg: 'National Institute for Health and Care Excellence',
    source: 'NICE Guideline NG226',
    year: 2022,
    type: 'guideline',
    url: 'https://www.nice.org.uk/guidance/ng226/chapter/Recommendations',
    takeaway:
      'Osteoarthritis care should center therapeutic exercise; hyaluronan injections are not offered in NICE guidance, while corticosteroid injections may provide short-term relief in selected situations.',
    verified: true,
    lastChecked: '2026-06-22',
  },
  {
    id: 'nice-eswt-plantar-htg200',
    label: 'NICE ESWT plantar fascia',
    authorsOrOrg: 'National Institute for Health and Care Excellence',
    source: 'NICE HealthTech Guidance 200',
    year: 2009,
    type: 'guideline',
    url: 'https://www.nice.org.uk/guidance/htg200',
    takeaway:
      'Shockwave therapy for refractory plantar fasciitis has no major safety concerns, but efficacy is uncertain enough that clear consent, governance, and outcome tracking are emphasized.',
    verified: true,
    lastChecked: '2026-06-22',
  },
  {
    id: 'nice-eswt-achilles-htg426',
    label: 'NICE ESWT Achilles',
    authorsOrOrg: 'National Institute for Health and Care Excellence',
    source: 'NICE HealthTech Guidance 426',
    year: 2016,
    type: 'guideline',
    url: 'https://www.nice.org.uk/guidance/htg426',
    takeaway:
      'For Achilles tendinopathy, NICE describes ESWT as having no major safety concerns but limited and inconsistent efficacy evidence.',
    verified: true,
    lastChecked: '2026-06-22',
  },
  {
    id: 'amssm-sports-us',
    label: 'AMSSM Sports US Curriculum',
    authorsOrOrg: 'American Medical Society for Sports Medicine',
    source: 'AMSSM',
    year: 2019,
    type: 'consensus',
    url: 'https://www.amssm.org/Content/pdf%20files/Sports_US_Curriculum.pdf',
    takeaway:
      'Sports ultrasound training should cover anatomy, patient selection, safety, and image-guided technique.',
    verified: true,
    lastChecked: '2026-06-22',
  },
  {
    id: 'aaos-prp-orthoinfo',
    label: 'AAOS PRP OrthoInfo',
    authorsOrOrg: 'American Academy of Orthopaedic Surgeons',
    source: 'OrthoInfo',
    year: 2026,
    type: 'narrative-review',
    url: 'https://orthoinfo.aaos.org/en/treatment/platelet-rich-plasma-prp/',
    takeaway:
      'PRP preparation varies; benefit may be delayed, evidence differs by condition, and risks appear similar to other injections but include post-injection pain and usual injection risks.',
    verified: true,
    lastChecked: '2026-06-22',
  },
  {
    id: 'aaos-orthobiologics-faq',
    label: 'AAOS Orthobiologics FAQ',
    authorsOrOrg: 'American Academy of Orthopaedic Surgeons',
    source: 'OrthoInfo',
    year: 2026,
    type: 'narrative-review',
    url: 'https://orthoinfo.aaos.org/en/treatment/orthobiologics-faq/',
    takeaway:
      'Orthobiologics can be promising in selected orthopedic problems, but rigorous effectiveness evidence is still limited and patients should weigh cost, risks, and expected benefit.',
    verified: true,
    lastChecked: '2026-06-22',
  },
  {
    id: 'amssm-regenerative-medicine-2021',
    label: 'AMSSM regenerative medicine position statement',
    authorsOrOrg: 'American Medical Society for Sports Medicine',
    source: 'Clinical Journal of Sport Medicine',
    year: 2021,
    type: 'consensus',
    url: 'https://pubmed.ncbi.nlm.nih.gov/34704973/',
    takeaway:
      'Responsible orthobiologic use should emphasize patient selection, transparent uncertainty, informed consent, and ongoing outcomes tracking.',
    verified: false,
  },
  {
    id: 'prp-medication-review-2022',
    label: 'PRP medication review',
    authorsOrOrg: 'Platelet-rich plasma medication review authors',
    source: 'PubMed-indexed review',
    year: 2022,
    type: 'systematic-review',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35434168/',
    takeaway:
      'Aspirin, acetaminophen, and nonselective NSAIDs may affect platelet activity enough that many protocols consider holding them around PRP, while medication safety decisions remain individualized.',
    verified: false,
  },
  {
    id: 'mayo-cortisone-shots',
    label: 'Mayo cortisone shots',
    authorsOrOrg: 'Mayo Clinic',
    source: 'Mayo Clinic patient education',
    year: 2026,
    type: 'narrative-review',
    url: 'https://www.mayoclinic.org/tests-procedures/cortisone-shots/about/pac-20384794',
    takeaway:
      'Corticosteroid injections can provide temporary relief but may cause short-term flare, transient blood-sugar rise, infection risk, tissue effects, and tendon weakening or rupture with larger or repeated exposure.',
    verified: true,
    lastChecked: '2026-06-22',
  },
]
