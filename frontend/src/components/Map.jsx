import React from "react";

const Map = () => {
  return (
    <div>
      {/* Map Section */}
      <div className="mt-8">
        <iframe
          title="Astro Agro Farm Stay Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.669087462944!2d73.37150341482194!3d18.819085287244762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e8d54481d6f9%3A0x4e33fa72a76bd3a2!2sR8PF%2BJV4%2C%20Bid-Jambrung%20Marg%2C%20Mankivali%2C%20Kelavali%2C%20Maharashtra%20410201!5e0!3m2!1sen!2sin!4v1672894785000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-md shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
