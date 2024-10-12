export type Address = {
  latitude: number
  longitude: number
  address: string
  addressDetail: string
  zipCode: string
  addressStatus?: 'main' | 'sub'
}

export type DaumAddress = {
  zonecode: string
  address: string
  addressEnglish: string
  addressType: 'R' | 'J'
  userSelectedType: 'R' | 'J'
  noSelected: 'Y' | 'N'
  userLanguageType: 'K' | 'E'
  roadAddress: string
  roadAddressEnglish: string
  jibunAddress: string
  jibunAddressEnglish: string
  autoRoadAddress: string
  autoRoadAddressEnglish: string
  autoJibunAddress: string
  autoJibunAddressEnglish: string
  buildingCode: string
  buildingName: string
  apartment: 'Y' | 'N'
  sido: string
  sidoEnglish: string
  sigungu: string
  sigunguEnglish: string
  sigunguCode: string
  roadnameCode: string
  bcode: string
  roadname: string
  roadnameEnglish: string
  bname: string
  bnameEnglish: string
  bname1: string
  bname1English: string
  bname2: string
  bname2English: string
  hname: string
  query: string
}

export type Member = {
  memberId: number
  nickname: string
  contact: string
  name: string
  address: Address
}

export type CreateMemberRequest = {
  nickName: string
  contact: string
  address: Address
}

export interface MemberAddressResponse {
  response: {
    addresses: Address[]
  }
  statusCode: number
  msg: string
}

export interface MemberResponse {
  response: {
    memberId: number
    nickName: string
    contact: string
    name: string
  }
  statusCode: number
  msg: string
}
