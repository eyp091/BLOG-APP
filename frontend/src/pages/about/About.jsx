import React from 'react';

const About = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg mt-12">
            <h1 className="text-4xl font-bold mb-6 text-center">Hakkında</h1>
            
            <p className="text-lg mb-4">
                Bu blog uygulaması, kullanıcıların kişisel blog yazılarını paylaşmasına ve okumasına olanak tanıyan modern bir web platformudur. Kullanıcılar çeşitli konularda yazılar yazabilir, düzenleyebilir ve silebilirler.
            </p>

            <p className="text-lg mb-4">
                Amaç, bilgi paylaşımını teşvik etmek ve kullanıcıların fikirlerini özgürce ifade edebileceği bir ortam sunmaktır. Teknolojiyi kullanarak herkesin erişebileceği bir platform yaratmayı hedefledik.
            </p>

            <h2 className="text-3xl font-semibold mb-4">Geliştirici</h2>
            <p className="text-lg mb-4">
                Bu proje, modern web teknolojileri kullanılarak geliştirildi: <span className="text-blue-400">React.js</span>, <span className="text-blue-400">Node.js</span>, ve <span className="text-blue-400">MongoDB</span>. Geliştirici olarak, web uygulamaları geliştirme konusunda tutkuluyum ve kullanıcı deneyimini ön planda tutuyorum.
            </p>

            <h2 className="text-3xl font-semibold mb-4">İletişim</h2>
            <p className="text-lg mb-4">
                Proje hakkında geri bildirim veya önerileriniz için bana ulaşabilirsiniz:
            </p>

            <ul className="list-disc list-inside mb-6">
                <li>Email: <a href="mailto:developer@example.com" className="text-blue-400 hover:underline">developer@example.com</a></li>
                <li>GitHub: <a href="https://github.com/eyp091" target="_blank" className="text-blue-400 hover:underline">Go to github</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/yourprofile" target="_blank" className="text-blue-400 hover:underline">go to LinkedIn</a></li>
            </ul>

            <div className="text-center">
                <p className="text-gray-400">© 2024 Blog Uygulaması. Tüm hakları saklıdır.</p>
            </div>
        </div>
    );
};

export default About;
