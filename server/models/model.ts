export interface User { email: string; first_name: string; last_name: string; avatar: string; }
export interface Result { data: CreatedUser[]; }
export interface CreatedUser extends User { id: number; }