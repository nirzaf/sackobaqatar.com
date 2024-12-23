export interface EventImage {
  url: string;
  title: string;
}

export interface Event {
  id: string;
  year: string;
  name: string;
  images: EventImage[];
  date: string;
  description?: string;
}

export interface FileSystemEvent {
  id: string;
  year: string;
  name: string;
  path: string;
  images: string[];
  date: Date;
}
