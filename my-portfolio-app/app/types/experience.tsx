export type WorkExperience = {
    title: string;
    from: string;
    to: string;
    summary: string;
    highlights: Array<string>;
  }

export type WorkExperienceProps = {
    workexperiences: WorkExperience[];
  }

  