import Head from 'next/head';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function DetailsPage() {
  return (
    <>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta
          name="description"
          content={props.meetupData.description}
        />
      </Head>
      <MeetupDetail
        image=""
        title="Title"
        address="address"
        description="description"
      />
    </>
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export function getStaticProps(context) {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image: '',
        id: 'm1',
        title: 'First meetup',
        address: 'Some Street 5, Some City',
        descripton: 'This is a first meetup',
      },
    },
  };
}

export default DetailsPage;
