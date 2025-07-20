export interface UserSettings {
  username: string
  email: string
  notifications: boolean
}

export const defaultUserSettings: UserSettings = {
  username: 'John Doe',
  email: 'john.doe@example.com',
  notifications: true,
} 