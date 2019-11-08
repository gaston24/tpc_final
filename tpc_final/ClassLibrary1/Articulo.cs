using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace vista.Models
{
    public class Articulo
    {
        public int Id { get; set; }
        public string Codigo { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public Marca Marca { get; set; }
        public Categoria Categ { get; set; }
        //public string Imagen { get; set; }
        public decimal Precio { get; set; }
    }
}