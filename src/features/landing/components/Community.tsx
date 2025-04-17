import { Button } from "~/components/ui/button";

const Community = () => {
  return (
    <section className="bg-primary/5 py-16 md:py-24" id="community">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Join Our Community
              </h2>
              <p className="text-muted-foreground text-xl">
                Connect with thousands of professionals, share insights, and grow
                together.
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <span className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full">
                  1
                </span>
                <div>
                  <h3 className="font-medium">Access Exclusive Content</h3>
                  <p className="text-muted-foreground">
                    Get access to webinars, e-books, and expert resources.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full">
                  2
                </span>
                <div>
                  <h3 className="font-medium">Participate in Discussions</h3>
                  <p className="text-muted-foreground">
                    Share your expertise and learn from others in the community.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-primary/10 text-primary flex h-8 w-8 items-center justify-center rounded-full">
                  3
                </span>
                <div>
                  <h3 className="font-medium">Networking Opportunities</h3>
                  <p className="text-muted-foreground">
                    Connect with like-minded professionals and industry leaders.
                  </p>
                </div>
              </li>
            </ul>
            <div className="mt-8">
              <Button size="lg">Join Our Community</Button>
            </div>
          </div>
          <div className="bg-muted relative h-[400px] overflow-hidden rounded-lg">
            <div className="from-primary/30 to-background/30 absolute inset-0 bg-gradient-to-br mix-blend-overlay" />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center text-white">
              <span className="bg-primary/20 mb-2 rounded-full px-4 py-1 text-sm backdrop-blur-md">
                10,000+ Members
              </span>
              <h3 className="mb-4 text-3xl font-bold">Growing Stronger Together</h3>
              <p className="max-w-md text-lg opacity-90">
                Join our global community of professionals and businesses transforming the
                future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
