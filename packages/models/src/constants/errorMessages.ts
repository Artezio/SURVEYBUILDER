export const REQUIRED = 'Question is required';
export type REQUIRED = typeof REQUIRED;

export const REG_EXP = 'Invalid input';
export type REG_EXP = typeof REG_EXP;

export type ErrorMessages = REG_EXP | REQUIRED;