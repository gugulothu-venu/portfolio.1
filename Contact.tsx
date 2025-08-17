import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'venu.nayak@example.com',
      href: 'mailto:venu.nayak@example.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hyderabad, India',
      href: 'https://maps.google.com',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/',
      color: 'hover:text-white',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/',
      color: 'hover:text-blue-400',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/',
      color: 'hover:text-blue-400',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-background to-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to work together? I'd love to hear about your project and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in new opportunities, challenging projects, and meaningful collaborations. 
                Whether you have a question, want to discuss a project, or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="glass-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <CardContent className="p-4">
                    <a
                      href={item.href}
                      className="flex items-center gap-4 text-foreground hover:text-primary transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{item.label}</p>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 glass-card rounded-lg text-muted-foreground transition-all duration-300 hover:scale-110 ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary">Send Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      First Name
                    </label>
                    <Input 
                      placeholder="John" 
                      className="glass-card border-primary/20 focus:border-primary bg-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Last Name
                    </label>
                    <Input 
                      placeholder="Doe" 
                      className="glass-card border-primary/20 focus:border-primary bg-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input 
                    type="email" 
                    placeholder="john.doe@example.com" 
                    className="glass-card border-primary/20 focus:border-primary bg-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input 
                    placeholder="Project Discussion" 
                    className="glass-card border-primary/20 focus:border-primary bg-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={4}
                    className="glass-card border-primary/20 focus:border-primary bg-transparent resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-secondary text-primary-foreground hover:from-primary/80 hover:to-secondary/80"
                  size="lg"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;