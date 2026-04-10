export type DimScore = 'L' | 'M' | 'H'
export type Profile = DimScore[]

export interface Question {
  id: number
  dimensionIndex: number
  model: string
  dimension: string
  text: string
  options: [string, string, string, string]
}

export interface PersonalityType {
  code: string
  name: string
  description: string
  profile: Profile
  isSpecial?: boolean
}
