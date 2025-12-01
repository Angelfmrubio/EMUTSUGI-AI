export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      compromisos: {
        Row: {
          fecha: string | null
          id: string
          leyes_aceptadas: boolean
          usuario_id: string
        }
        Insert: {
          fecha?: string | null
          id?: string
          leyes_aceptadas?: boolean
          usuario_id: string
        }
        Update: {
          fecha?: string | null
          id?: string
          leyes_aceptadas?: boolean
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "compromisos_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["id"]
          },
        ]
      }
      diagnosticos_diarios: {
        Row: {
          dominancia_cerebral: string
          emocion: string
          fecha: string | null
          id: string
          usuario_id: string
        }
        Insert: {
          dominancia_cerebral: string
          emocion: string
          fecha?: string | null
          id?: string
          usuario_id: string
        }
        Update: {
          dominancia_cerebral?: string
          emocion?: string
          fecha?: string | null
          id?: string
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "diagnosticos_diarios_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          id: string
          nombre: string | null
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          id: string
          nombre?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string | null
          id?: string
          nombre?: string | null
        }
        Relationships: []
      }
      protocolos_completados: {
        Row: {
          fase_1_completada: boolean | null
          fase_2_completada: boolean | null
          fase_3_completada: boolean | null
          fase_4_completada: boolean | null
          fecha_completado: string | null
          id: string
          usuario_id: string
        }
        Insert: {
          fase_1_completada?: boolean | null
          fase_2_completada?: boolean | null
          fase_3_completada?: boolean | null
          fase_4_completada?: boolean | null
          fecha_completado?: string | null
          id?: string
          usuario_id: string
        }
        Update: {
          fase_1_completada?: boolean | null
          fase_2_completada?: boolean | null
          fase_3_completada?: boolean | null
          fase_4_completada?: boolean | null
          fecha_completado?: string | null
          id?: string
          usuario_id?: string
        }
        Relationships: []
      }
      Proyectos: {
        Row: {
          AUTHOR: string
          CREATED_AT: string
          ID: string
          STATUS: string
          TITLE: string
          UID: string
          UPLOADED: string
        }
        Insert: {
          AUTHOR: string
          CREATED_AT?: string
          ID?: string
          STATUS: string
          TITLE: string
          UID?: string
          UPLOADED?: string
        }
        Update: {
          AUTHOR?: string
          CREATED_AT?: string
          ID?: string
          STATUS?: string
          TITLE?: string
          UID?: string
          UPLOADED?: string
        }
        Relationships: []
      }
      rituales_completados: {
        Row: {
          fecha: string | null
          haiku_generado: string | null
          id: string
          tipo_ritual: string
          usuario_id: string
        }
        Insert: {
          fecha?: string | null
          haiku_generado?: string | null
          id?: string
          tipo_ritual: string
          usuario_id: string
        }
        Update: {
          fecha?: string | null
          haiku_generado?: string | null
          id?: string
          tipo_ritual?: string
          usuario_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rituales_completados_usuario_id_fkey"
            columns: ["usuario_id"]
            isOneToOne: false
            referencedRelation: "usuarios"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      usuarios: {
        Row: {
          email: string
          fecha_creacion: string | null
          id: string
          nombre: string | null
        }
        Insert: {
          email: string
          fecha_creacion?: string | null
          id: string
          nombre?: string | null
        }
        Update: {
          email?: string
          fecha_creacion?: string | null
          id?: string
          nombre?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
