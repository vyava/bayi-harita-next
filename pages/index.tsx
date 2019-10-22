import React from 'react'
import DefaultLayout from '../layouts/Default'
import BayiList from "../components/root/List";

const Index: React.FunctionComponent = () => {
  // React.useEffect(() => {
  //   if ('serviceWorker' in navigator) {
  //     navigator.serviceWorker
  //       .register('/serviceWorker.js')
  //       .then(() => console.log('service worker registered.'))
  //       .catch(err => console.dir(err));
  //   }
  // })
  return (
    <DefaultLayout title="Home">
        <BayiList></BayiList>
    </DefaultLayout>
  )
}
export default Index