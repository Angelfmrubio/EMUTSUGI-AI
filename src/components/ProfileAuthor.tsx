import { Button } from "@/components/ui/button";

export function ProfileAuthor() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Perfil del Autor</h2>
      <p className="text-gray-600 mb-6">
        Con más de 15 años de experiencia en transformación personal y neuroplasticidad.
      </p>
      <Button variant="outline">
        Conoce más
      </Button>
    </div>
  );
}