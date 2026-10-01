// Personal content used by the Home and About pages, kept in one place so it
// can be edited without touching component code.
// TODO: replace every "[PLACEHOLDER]" value with my own wording before submitting.

const profile = {
  legalName: 'Colby Smith', // TODO: confirm this is my full legal name
  headline: 'Junior Software Developer',
  studentSummary: 'Software Engineering Technology student at Centennial College',

  welcomeMessage:
    "[PLACEHOLDER] Welcome to my portfolio! A sentence or two greeting visitors and saying what they'll find here.",

  missionStatement:
    '[PLACEHOLDER] My mission statement: what I aim to do as a developer and the kind of work I want to be known for.',

  // Short, professional paragraphs for the About page (a prospective employer may read this).
  bioParagraphs: [
    '[PLACEHOLDER] Who I am: my program, my background, and what got me into software development.',
    "[PLACEHOLDER] What I'm focused on now and what I'm looking for (e.g. co-op placements, junior roles).",
  ],

  // Served from the public/ folder, so the path is from the site root.
  resumeUrl: '/resume.pdf',
}

export default profile
