export class RegisterStudentUseCase {
  constructor(studentRepository) {
    this.studentRepository = studentRepository;
  }

  async execute({ fullName, email, track }) {
    if (!email || !email.includes('@')) {
      throw new Error('INVALID_EMAIL_ADDRESS');
    }

    const normalizedEmail = email.toLowerCase().trim();
    const existing = await this.studentRepository.findByEmail(normalizedEmail);

    if (existing) {
      throw new Error('STUDENT_ALREADY_REGISTERED');
    }

    return await this.studentRepository.save({
      fullName: fullName.trim(),
      email: normalizedEmail,
      track,
      createdAt: new Date().toISOString()
    });
  }
}
