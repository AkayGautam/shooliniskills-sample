import Layout from "@/components/layout/Layout"
import { useRouter } from 'next/router';
import { useState } from 'react';


export async function getServerSideProps({ query }) {
  return {
    props: {
      title: query.title ?? "",
      id: query.id ?? "",
    },
  };
}

export default function EnrollPage({  id }) {


      const router = useRouter();
     const { title } = router.query;

     const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone:'',
    courseTitle: title || '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('Success! Your email has been sent and should arrive shortly!');
        setFormData({ name: '', email: '', phone: '',courseTitle:{formattedTitle}, message: '' }); // Clear form
      } else {
        setStatus(`Error: ${data.message}`);
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };
 
  const formattedTitle = title && typeof title === 'string' 
    ? title.replace(/-/g, " ") 
    : "Default Title";



  return (
     <Layout headerStyle={3} footerStyle={1} breadcrumbTitle={formattedTitle}> 
    <div className="container"> 
         <div>
                    <section className="contact-area py-5">
                        <div className="container">
                            <div className="row">
                                 
                                <div className="col-lg-12">
                                    <div className="contact-form-wrap">
                                        <h4 className="title text-uppercase">Express Early Interest</h4>
                                        <form id="contact-form" onSubmit={handleSubmit} className="mb-2">
                                         <input type="hidden" name="courseTitle" value={title} />
                                               <input type="hidden" name="courseId" value={id} />
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="name" type="text" id="name"
                                                         value={formData.name}
                                                          onChange={handleChange}
                                                        placeholder="Name *" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="email" type="email" id="email"
                                                        value={formData.email}
                                                          onChange={handleChange}
                                                        placeholder="E-mail *" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="phone" type="number" id="phone"
                                                        value={formData.phone}
                                                          onChange={handleChange}
                                                        placeholder="Phone *" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input  type="text" className="text-uppercase"
                                                        name="courseTitle"
                                                        readOnly
                                                        id="courseTitle"
                                                        value={formattedTitle} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-grp">
                                                <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Message" />
                                            </div>
                                            <button type="submit" className="btn">Send Message</button>
                                        </form>
                                        {status && <div class="alert alert-success" role="alert">
                                          {status}    
                                            </div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> 
                </div>
 
    </div>
    </Layout>
  );
}
