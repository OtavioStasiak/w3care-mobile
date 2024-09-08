export type user = {
  name: string;
  email: string;
  phone: string;
  psychologist?: psychologistUser;
  patient?: patientUser;
};

export type psychologistUser = {
  cpf: string;
  crp: string;
  patients: patientUser[];
};

export type patientUser = {
  psychologist?: psychologistUser;
  cpf: string;
  birthDate: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  rooms: room[];
};

export type room = {
  id: string;
  dateTime: Date;
  psychologist: psychologistUser;
  patient: patientUser;
  accepted: boolean;
};
