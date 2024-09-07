export const patientUser = {
    cpf: "123.456.789-10",
    birthDate: "1990-05-15",
    emergencyContactName: "John Doe",
    emergencyContactNumber: "+55 11 98765-4321",
    psychologist: undefined,
    rooms: []
};
  
export const psychologistUser = {
    cpf: "987.654.321-00",
    crp: "06/123456",
    patients: [patientUser] 
};

export const room = {
    id: "room-001",
    dateTime: new Date(),
    psychologist: psychologistUser,
    patient: patientUser,
    accepted: true
};

export const notification = {
    message: "Appointment confirmed",
    date: new Date(),
    user: patientUser,
};

export const user = {
    name: "Dr. Sarah",
    email: "dr.sarah@example.com",
    phone: "+55 11 98765-1234",
    psychologist: psychologistUser
};
  