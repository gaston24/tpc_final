using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace vista.Models
{
    
        public class Categoria
        {
            public int idCategoria { get; set; }
            public string Descripcion { get; set; }

            public override string ToString()
            {
                return Descripcion;
            }
        }
    
}