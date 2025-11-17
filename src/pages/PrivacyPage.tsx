
const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">
          Política de Privacidad
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-neutral-800">Compromiso de Privacidad</h2>
          <p className="text-neutral-600 mb-4">
            En EMUTSUGI, nos comprometemos a proteger la privacidad de todos los usuarios. Nuestra plataforma
            está diseñada con un fuerte énfasis en el anonimato y la protección de datos.
          </p>
          
          <h2 className="text-xl font-semibold mb-4 text-neutral-800 mt-8">Recolección de Datos</h2>
          <p className="text-neutral-600 mb-4">
            Las evaluaciones se realizan de forma completamente anónima. No recolectamos información
            personal identificable como nombres, direcciones de correo electrónico o información de contacto.
          </p>
          
          <h2 className="text-xl font-semibold mb-4 text-neutral-800 mt-8">Uso de Datos</h2>
          <p className="text-neutral-600 mb-4">
            Las respuestas proporcionadas durante la evaluación son procesadas mediante algoritmos
            para generar recomendaciones. Estos datos son almacenados temporalmente y de forma anónima,
            y no son compartidos con terceros bajo ninguna circunstancia.
          </p>
          
          <h2 className="text-xl font-semibold mb-4 text-neutral-800 mt-8">Seguridad</h2>
          <p className="text-neutral-600 mb-4">
            Implementamos medidas de seguridad técnicas y organizativas para proteger la información
            procesada por nuestra plataforma contra el acceso no autorizado, la alteración, divulgación
            o destrucción no autorizada.
          </p>
          
          <h2 className="text-xl font-semibold mb-4 text-neutral-800 mt-8">Contacto</h2>
          <p className="text-neutral-600">
            Si tiene preguntas sobre nuestra política de privacidad, puede ponerse en contacto con nosotros
            a través de los canales oficiales disponibles en nuestro sitio web.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
