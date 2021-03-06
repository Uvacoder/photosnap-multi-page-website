import Image from 'next/image';
import Seo from '../components/seo';
import Layout from '../components/layout';
import FeatureSection from '../components/featureSection';
import Hero from '../components/hero';
import ResponsiveIcon from '../public/images/features/responsive.svg';
import NoLimitIcon from '../public/images/features/no-limit.svg';
import EmbedIcon from '../public/images/features/embed.svg';
import CustomDomainIcon from '../public/images/features/custom-domain.svg';
import BoostExposureIcon from '../public/images/features/boost-exposure.svg';
import DragDropIcon from '../public/images/features/drag-drop.svg';

function Features() {
  const features = [
    {
      id: 1,
      heading: '100% Responsive',
      description:
        'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.',
      icon: <ResponsiveIcon />,
    },
    {
      id: 2,
      heading: 'No Photo Upload Limit',
      description:
        'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
      icon: <NoLimitIcon />,
    },
    {
      id: 3,
      heading: 'Available to Embed',
      description:
        'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
      icon: <EmbedIcon />,
    },
    {
      id: 4,
      heading: 'Custom Domain',
      description:
        'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!',
      icon: <CustomDomainIcon />,
    },
    {
      id: 5,
      heading: 'Boost Your Exposure',
      description:
        'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.',
      icon: <BoostExposureIcon />,
    },
    {
      id: 6,
      heading: 'Drag & Drop Image',
      description:
        'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
      icon: <DragDropIcon />,
    },
  ];

  return (
    <>
      <Seo />
      <Layout>
        <Hero
          hero={{
            heading: 'Features',
            description:
              'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.',
            image: (
              <Image
                src="/images/features/features1660x980.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="33%"
                sizes="(min-width: 1200px) 720px, (min-width: 600px) 200px, 100vw"
                alt="A man with a camera standing on a jetty looking out across a lake"
              />
            ),
          }}
          style={1}
        />
        <FeatureSection features={features} />
      </Layout>
    </>
  );
}

export default Features;
