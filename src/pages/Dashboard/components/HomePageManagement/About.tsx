//'''
// src/pages/Dashboard/components/HomePageManagement/About.tsx
import { useState } from 'react';
import { homePageService } from '../../../../services/HomePageService';

const About: React.FC = () => {
  const [whoWeAre, setWhoWeAre] = useState('');
  const [whatWeDo, setWhatWeDo] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleUpdateAbout = async () => {
    const result = await homePageService.updateAbout({ whoWeAre, whatWeDo, image });
    if (result.success) {
      alert('Presentation updated successfully');
    } else {
      alert('Error updating presentation');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files ? e.target.files[0] : null);
  };

  return (
    <div className="about-management">
      <h2>Manage Presentation</h2>
      <div>
        <label>Who We Are:</label>
        <textarea
          value={whoWeAre}
          onChange={(e) => setWhoWeAre(e.target.value)}
        />
      </div>
      <div>
        <label>What We Do:</label>
        <textarea
          value={whatWeDo}
          onChange={(e) => setWhatWeDo(e.target.value)}
        />
      </div>
      <div>
        <label>Image:</label>
        <input
          type="file"
          onChange={handleFileChange}
        />
      </div>
      <button onClick={handleUpdateAbout}>Update</button>
    </div>
  );
};

export default About;
//'''
