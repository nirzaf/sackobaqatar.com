export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit: (data: ContactFormData) => void;
}

export interface ContactInfoProps {
  title: string;
  description: string;
}

export interface ContactSectionProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

export interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}
