import type { Region, SportMeta } from './types'

/** Body regions, ordered head-to-toe for natural clinic navigation. */
export const regions: Region[] = [
  {
    id: 'shoulder',
    name: 'Shoulder',
    iconKey: 'shoulder',
    order: 1,
    blurb: 'Rotator cuff, subacromial pain, frozen shoulder, AC joint, biceps.',
  },
  {
    id: 'elbow',
    name: 'Elbow',
    iconKey: 'elbow',
    order: 2,
    blurb: 'Tennis elbow, golfer’s elbow, and ulnar nerve irritation.',
  },
  {
    id: 'wrist-hand',
    name: 'Wrist & Hand',
    iconKey: 'wrist-hand',
    order: 3,
    blurb: 'De Quervain’s, wrist sprains, and trigger finger.',
  },
  {
    id: 'neck',
    name: 'Neck',
    iconKey: 'neck',
    order: 4,
    blurb: 'Mechanical neck pain and cervical nerve irritation.',
  },
  {
    id: 'low-back',
    name: 'Low Back',
    iconKey: 'low-back',
    order: 5,
    blurb: 'Mechanical back pain, sciatica, and young-athlete back pain.',
  },
  {
    id: 'hip-pelvis',
    name: 'Hip & Pelvis',
    iconKey: 'hip-pelvis',
    order: 6,
    blurb: 'Gluteal tendinopathy, hip OA, and groin/hamstring overload.',
  },
  {
    id: 'knee',
    name: 'Knee',
    iconKey: 'knee',
    order: 7,
    blurb: 'Kneecap pain, jumper’s knee, arthritis, sprains, IT band.',
  },
  {
    id: 'lower-leg',
    name: 'Lower Leg',
    iconKey: 'lower-leg',
    order: 8,
    blurb: 'Achilles tendinopathy and shin splints.',
  },
  {
    id: 'ankle-foot',
    name: 'Ankle & Foot',
    iconKey: 'ankle-foot',
    order: 9,
    blurb: 'Ankle sprains and plantar heel pain.',
  },
]

export const regionById = new Map(regions.map((r) => [r.id, r]))

/** Sport tags used as a secondary filter across conditions. */
export const sportMeta: SportMeta[] = [
  { id: 'running', name: 'Running', iconKey: 'running' },
  { id: 'pickleball', name: 'Pickleball', iconKey: 'pickleball' },
  { id: 'tennis', name: 'Tennis', iconKey: 'tennis' },
  { id: 'golf', name: 'Golf', iconKey: 'golf' },
  { id: 'basketball', name: 'Basketball', iconKey: 'basketball' },
  { id: 'volleyball', name: 'Volleyball', iconKey: 'volleyball' },
  { id: 'soccer', name: 'Soccer', iconKey: 'soccer' },
  { id: 'cycling', name: 'Cycling', iconKey: 'cycling' },
  { id: 'swimming', name: 'Swimming', iconKey: 'swimming' },
  { id: 'lifting', name: 'Lifting', iconKey: 'lifting' },
  { id: 'climbing', name: 'Climbing', iconKey: 'climbing' },
  { id: 'throwing', name: 'Throwing', iconKey: 'throwing' },
  { id: 'general', name: 'General / Daily', iconKey: 'general' },
]

export const sportMetaById = new Map(sportMeta.map((s) => [s.id, s]))
