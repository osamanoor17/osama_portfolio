import aiAndDataScienceImage from '../assets/certifications/ai and data science.png';
import githubImage from '../assets/certifications/github.png';
import flutterImage from '../assets/certifications/flutter.png';
import googleCloudImage from '../assets/certifications/google cloud.png';

const linkedInCertificationsUrl = 'https://www.linkedin.com/in/mosamanoor/details/certifications/';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  topic: string;
  image: string;
  url: string;
  imageAlt: string;
  description: string;
  skills: string[];
  credentialId?: string;
}

export const certifications: Certification[] = [
  {
    id: 'ai-ds-bootcamp',
    title: 'Data Science and AI Bootcamp',
    issuer: 'atomcamp',
    issued: '2023',
    topic: 'Data Science / AI',
    image: aiAndDataScienceImage,
    url: linkedInCertificationsUrl,
    imageAlt: 'Atomcamp Data Science and AI Bootcamp certificate for Muhammad Osama Noor',
    description:
      'Intensive hands-on bootcamp covering end-to-end Data Science and Artificial Intelligence. Focuses on Python data engineering, statistical modeling, machine learning algorithms, deep learning, NLP, and deploying AI models into production.',
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'Pandas & NumPy', 'Scikit-Learn', 'NLP', 'Model Deployment'],
  },
  {
    id: 'github-prof',
    title: 'Career Essentials in GitHub Professional Certificate',
    issuer: 'GitHub & LinkedIn Learning',
    issued: 'March 2024',
    topic: 'Development Workflow',
    image: githubImage,
    url: linkedInCertificationsUrl,
    imageAlt: 'LinkedIn Learning Career Essentials in GitHub Professional Certificate for Muhammad Osama Noor',
    description:
      'Professional certification validating mastery of GitHub repository architecture, Git version control, GitHub Actions CI/CD automation, pull request workflows, team code reviews, and enterprise security standards.',
    skills: ['Git', 'GitHub Actions', 'CI/CD Pipelines', 'Version Control', 'Code Security', 'Collaborative Workflows'],
  },
  {
    id: 'flutter-bootcamp',
    title: 'The Complete 2021 Flutter Development Bootcamp with Dart',
    issuer: 'Udemy (Google Flutter Team Supported)',
    issued: 'October 2022',
    topic: 'Mobile Engineering',
    image: flutterImage,
    url: 'https://www.udemy.com/certificate/UC-27b8fb15-e959-4803-a8b6-e1f3c6a47273/',
    imageAlt: 'Udemy Flutter Development Bootcamp with Dart certificate for Muhammad Osama Noor',
    description:
      'Comprehensive Flutter cross-platform mobile development certification built in collaboration with the Google Flutter team. Covers Dart 3, custom reactive UI rendering, state management (Provider, BLoC), Firebase backends, REST API integration, and native Android/iOS compilation.',
    skills: ['Flutter', 'Dart', 'Mobile UX', 'Firebase', 'State Management (Provider/BLoC)', 'REST APIs', 'iOS & Android'],
    credentialId: 'UC-27b8fb15-e959-4803-a8b6-e1f3c6a47273',
  },
  {
    id: 'gcp-ml-ai',
    title: 'Baseline: Data, ML, AI',
    issuer: 'Google Cloud Skills Boost',
    issued: '2023',
    topic: 'Cloud Data & AI',
    image: googleCloudImage,
    url: linkedInCertificationsUrl,
    imageAlt: 'Google Cloud Baseline Data, ML, AI completion badge for Muhammad Osama Noor',
    description:
      'Google Cloud skill certification demonstrating practical competency in Cloud Data engineering, BigQuery SQL analysis, Google Cloud AI APIs (Vision AI, Speech-to-Text), AutoML model training, and scalable cloud ML infrastructure.',
    skills: ['Google Cloud Platform', 'BigQuery', 'AutoML', 'Vision AI API', 'Cloud Infrastructure', 'Data Analytics'],
  },
];
