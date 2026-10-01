// Projects shown on the Projects page. Facts are taken from my resume;
// TODO: replace "[PLACEHOLDER]" text, and swap the illustrations for real
// screenshots where possible (only ones that don't show confidential company data).
import powerBiImage from '../assets/projects/powerbi-dashboards.svg'
import dataWarehouseImage from '../assets/projects/api-data-warehouse.svg'
import ocrImage from '../assets/projects/ocr-automation.svg'
import aippsImage from '../assets/projects/aipps-srs.svg'

const projects = [
  {
    id: 'powerbi-dashboards',
    title: 'Interactive Power BI Dashboards',
    context: 'ConsumerGenius · Business Analyst · May–Aug 2024',
    image: powerBiImage,
    role: 'Designed and built interactive Power BI dashboards for teams across the company.',
    outcome:
      'Improved data accessibility and supported data-driven decisions across departments. [PLACEHOLDER: add a specific example or metric if you have one]',
    tools: ['Power BI', 'Data modelling'],
  },
  {
    id: 'api-data-warehouse',
    title: 'REST API Data Warehouse',
    context: 'ConsumerGenius · Business Analyst · May–Aug 2024',
    image: dataWarehouseImage,
    role: 'Consolidated QuickBooks, Salesforce and Ringba REST API data into a centralized data warehouse.',
    outcome:
      'Substantially cut data processing time. [PLACEHOLDER: approximate before/after time, if known]',
    tools: ['REST APIs', 'SQL', 'Star-schema design'],
  },
  {
    id: 'ocr-automation',
    title: 'OCR Data-Entry Automation',
    context: 'ConsumerGenius · Business Analyst · May–Aug 2024',
    image: ocrImage,
    role: 'Wrote Python scripts using Azure Document Intelligence (OCR) to automate manual data entry.',
    outcome: 'Saved 200+ hours of manual work annually.',
    tools: ['Python', 'Azure Document Intelligence'],
  },
  {
    id: 'aipps-srs',
    title: 'AI-Powered Privacy Protection System — SRS',
    context: 'Centennial College · Academic team project',
    image: aippsImage,
    role:
      'Wrote the functional and non-functional requirements sections, use cases and interview questions, working in an Agile team.',
    outcome:
      'Delivered a Software Requirements Specification for a program that uses ML models to detect and block phishing websites. [PLACEHOLDER: grade or feedback, if you want to mention it]',
    tools: ['Requirements engineering', 'Agile', 'Use cases'],
  },
]

export default projects
