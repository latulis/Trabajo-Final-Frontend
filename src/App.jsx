import React from 'react';
import { Contacts, Chat, DetailChat, ContactCreate, NotFound, EditContact , Review, ReviewCreate} from './Pages';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Contacts />} />
      <Route path='/chat/:contacto_id' element={<Chat />} />
      <Route path='/detailchat/:contacto_id' element={<DetailChat />} />
      <Route path='/contactcreate' element={<ContactCreate />} />
      <Route path='/editcontact/:contacto_id' element={<EditContact />} />
      <Route path='/review' element={<Review />} />
      <Route path='/reviewcreate' element={<ReviewCreate />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
}

export default App;
