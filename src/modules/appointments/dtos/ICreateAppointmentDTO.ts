// Formato dos dados que vão ser criado o appointment, p isso serve o DTO

export default interface ICreateAppointmentDTO {
  provider_id: string;
  user_id: string;
  date: Date;
}
