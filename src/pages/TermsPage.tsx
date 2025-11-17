
const TermsPage = () => {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gold-600 to-gold-400 bg-clip-text text-transparent">
          Términos y Condiciones
        </h1>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-neutral-800">Uso de la Plataforma</h2>
          <p className="text-neutral-600 mb-4">
            EMUTSUGI es una plataforma de evaluación psicológica multimodal diseñada para proporcionar 
            orientación basada en técnicas de análisis semántico y principios de PNL. Al utilizar esta plataforma,
            usted acepta los siguientes términos y condiciones.
          </p>
          
          <h2 className="text-xl font-semibold mb-4 text-neutral-800 mt-8">No Diagnóstico Clínico</h2>
          <p className="text-neutral-600 mb-4">
            Los resultados proporcionados por EMUTSUGI no constituyen un diagnóstico clínico y no deben 
            utilizarse como sustituto de la consulta, el tratamiento o el consejo de un profesional de la salud 
            mental cualificado. La plataforma está diseñada como una herramienta de orientación complementaria.
          </p>
          
          <h2 className="text-xl font-semibold mb-4 text-neutral-800 mt-8">Limitación de Responsabilidad</h2>
          <p className="text-neutral-600 mb-4">
            EMUTSUGI no será responsable por daños directos, indirectos, incidentales, consecuentes o especiales 
            que puedan surgir del uso o la imposibilidad de usar la plataforma o sus resultados. El usuario asume 
            toda la responsabilidad por el uso que haga de la información proporcionada.
          </p>
          
          <h2 className="text-xl font-semibold mb-4 text-neutral-800 mt-8">Derivación Profesional</h2>
          <p className="text-neutral-600 mb-4">
            Cuando la plataforma recomiende la consulta con un profesional, es altamente aconsejable seguir esta 
            recomendación. En situaciones de crisis o emergencia, busque ayuda inmediata a través de los servicios 
            de emergencia o líneas de crisis disponibles en su localidad.
          </p>
          
          <h2 className="text-xl font-semibold mb-4 text-neutral-800 mt-8">Modificaciones</h2>
          <p className="text-neutral-600">
            Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán 
            en vigor inmediatamente después de su publicación en la plataforma. El uso continuado de EMUTSUGI después 
            de cualquier modificación constituirá su aceptación de los términos modificados.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;
