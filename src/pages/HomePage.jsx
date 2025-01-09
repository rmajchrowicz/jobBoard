import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJabs from '../components/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero /> 
      <HomeCards />
      <JobListings isHome ={true} />
      <ViewAllJabs />
    </>
  )
}

export default HomePage
