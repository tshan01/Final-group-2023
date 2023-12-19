'use client'
const Footer = () => {
    return (
        <footer style={{ 
            backgroundColor: 'white', // Changed to white background
            color: 'black', // Changed text color to black
            padding: '20px 0', // Vertical padding 20px, horizontal padding 0
            display: 'flex', 
            justifyContent: 'space-between', // Space out child elements evenly
            alignItems: 'center', // Align items vertically in the center
            fontSize: '16px', // Base font size
            fontFamily: 'Lato, sans-serif', // Font family
            width: '100%', // Full width
            boxSizing: 'border-box' // Ensure padding does not add to the width
        }}>
            {/* Left Side - Find Our Restaurants */}
            <div style={{ 
                textAlign: 'left', // Align text to the left
                paddingLeft: '20px' // Padding on the left
            }}>
                <h3 style={{
                    fontWeight: 'bold', 
                    marginBottom: '5px',
                    paddingLeft: '4px' // Adjust the pixel value as needed
                }}>Find Our Restaurant</h3>

                <p>45th ST NYC, 10001</p>
                
            </div>
            
            {/* Center - True Black*/}
            <div style={{ 
                textAlign: 'center', // Center text
                padding: '0 30px' // Padding on the sides
            }}>
                <div style={{ 
                    fontWeight: 'bold',
                    fontSize: '24px', // Larger font size for True Black
                }}>
                    True Black
                </div>
                <div style={{ 
                    color: '#494DAB', // Blue text color for the company name and copyright notice
                    fontSize: '14px', // Smaller font size for copyright notice
                }}>
                    © TrueBlackNYC 2016 • All rights reserved.
                </div>
            </div>

            {/* Right Side - Working Hours */}
            <div style={{ 
                textAlign: 'right', // Align text to the right
                paddingRight: '20px' // Padding on the right
            }}>
                <h3 style={{ fontWeight: 'bold', marginBottom: '5px' }}>Working Hours</h3>
                <p>Mon-Fri: 8am-5pm</p>
                <p>Sat-Sun: 8am-7pm</p>
            </div>
        </footer>
    );
};

export default Footer;
