export interface Employee {
  id: number,
  name?: string,
  genmder?: string,
  email?: string,
  phoneNumber?: string,
  contactPreference?: string,
  dateOfBirth: Date,
  department: string,
  isActive: boolean,
  photoPath?: string
}
