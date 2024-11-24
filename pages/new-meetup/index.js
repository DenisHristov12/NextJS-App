import Head from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function MeetupPage() {
  function handleAddMeetup(enteredData) {}

  return (
    <>
      <Head>
        <title>Add a new meetup</title>
        <meta
          name="description"
          content="Add your own meetups and create amazing networking opportunities"
        />
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetup} />
    </>
  );
}

export default MeetupPage;
