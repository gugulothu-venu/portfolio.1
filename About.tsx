import { GraduationCap, Award, Brain, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const education = [
    {
      year: '2023 - Present',
      title: 'B.Tech in Computer Science',
      institution: 'IIT Indore',
      description: 'Pursuing Bachelor of Technology with focus on algorithms, data structures, and software development.',
      icon: GraduationCap,
    },
    {
      year: '2022',
      title: 'Higher Secondary Education',
      institution: 'Narayana Junior College',
      description: 'Completed intermediate education with distinction in Mathematics, Physics, and Chemistry.',
      icon: Award,
    },
    {
      year: '2024',
      title: 'Full Stack Development Bootcamp',
      institution: 'Self-Paced Learning',
      description: 'Completed intensive training in React, Node.js, MongoDB, and modern web technologies.',
      icon: Brain,
    },
  ];

  const skills = [
    { name: 'C++', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'Python', level: 70 },
    { name: 'Data Structures & Algorithms', level: 88 },
  ];

  const interests = [
    'Competitive Programming',
    'Tech Conferences',
    'Open Source Contribution',
    'AI/ML Research',
    'Web3 Technologies',
    'Mobile App Development',
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-br from-background to-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Education, Training & Skills
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Journey */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-primary flex items-center">
              <Calendar className="mr-3 h-6 w-6" />
              Journey
            </h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-primary font-semibold mb-1">{item.year}</div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-primary/80 font-medium mb-2">{item.institution}</p>
                        <p className="text-muted-foreground text-sm">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Skills & Interests */}
          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Skills</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="glass-card p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{skill.name}</span>
                      <span className="text-primary font-semibold">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Interests</h3>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="glass-card p-3 rounded-lg text-center text-sm font-medium text-foreground hover:bg-primary/10 transition-colors cursor-pointer"
                  >
                    {interest}
                  </div>
                ))}
              </div>
              <div className="mt-6 glass-card p-4 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">Conference Participation</h4>
                <p className="text-sm text-muted-foreground">
                  Actively participated in 5+ tech conferences including hackathons, developer meetups, and coding competitions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;