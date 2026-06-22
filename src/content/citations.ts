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
    id: 'amssm-sports-us',
    label: 'AMSSM Sports US Curriculum',
    authorsOrOrg: 'American Medical Society for Sports Medicine',
    source: 'AMSSM',
    year: 2019,
    type: 'consensus',
    url: 'https://www.amssm.org/Content/pdf%20files/Sports_US_Curriculum.pdf',
    takeaway:
      'Sports ultrasound training should cover anatomy, patient selection, safety, and image-guided technique.',
    verified: false,
  },
]
