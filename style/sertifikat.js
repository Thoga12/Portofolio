fetch('../sertifikat.json')
            .then(response => response.json())
            .then(data => {
                const container = document.querySelector('.certificate');
                data.forEach(cert => {
                    const certSection = document.createElement('div');
                    certSection.classList.add('certificates');
                    certSection.innerHTML = `
						<img src="${cert.image}" alt="${cert.title}">
						<aside class="content-certificate">
							<h2>${cert.title}</h2>
							<p><strong>Issued by:</strong> ${cert.issuer}</p>
							<p><strong>Date:</strong> ${cert.date}</p>
							<p><strong>Description:</strong>${cert.description}</p>
						</aside>
                    `;
                    container.appendChild(certSection);
                });
            });

