using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.SqlClient;



namespace vista.Controllers
{
    public class ArticuloControlador
    {

        public class ArticuloMetodos
        {
            public List<Articulo> MostrarArticulos()
            {
                List<Articulo> listado = new List<Articulo>();
                SqlCommand comando = new SqlCommand();
                SqlConnection conexion = new SqlConnection();
                SqlDataReader lector;

                Articulo art;


                try
                {
                    conexion.ConnectionString = "data source=(local); initial catalog = CATALOGO_DB; Integrated Security=True;";
                    comando.CommandType = System.Data.CommandType.Text;
                    comando.CommandText = "SELECT A.ID, CODIGO, NOMBRE, A.DESCRIPCION, IDMARCA, B.Descripcion MARCA_DESC, IDCATEGORIA, C.Descripcion CAT_DESC, IMAGEN, PRECIO FROM ARTICULOS A INNER JOIN MARCAS B ON A.IdMarca = B.Id INNER JOIN CATEGORIAS C ON A.IdCategoria = C.Id WHERE ESTADO = 1";
                    comando.Connection = conexion;
                    conexion.Open();
                    lector = comando.ExecuteReader();


                    while (lector.Read())
                    {
                        art = new Articulo();
                        art.Id = (int)lector["ID"];
                        art.Codigo = lector["CODIGO"].ToString();
                        art.Nombre = lector["NOMBRE"].ToString();
                        art.Descripcion = lector["DESCRIPCION"].ToString();

                        art.Marca = new Marca();
                        art.Marca.idMarca = (int)lector["IDMARCA"];
                        art.Marca.Descripcion = lector["MARCA_DESC"].ToString();

                        art.Categ = new Categoria();
                        art.Categ.idCategoria = (int)lector["IDCATEGORIA"];
                        art.Categ.Descripcion = lector["CAT_DESC"].ToString();

                        art.Precio = (decimal)lector["PRECIO"];

                        listado.Add(art);
                    }
                    return listado;
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                finally
                {
                    conexion.Close();
                }

            }

            public void AgregarArticulos(Articulo art)
            {
                SqlCommand comando = new SqlCommand();
                SqlConnection conexion = new SqlConnection();

                try
                {
                    conexion.ConnectionString = "data source=(local); initial catalog = CATALOGO_DB; Integrated Security=True;";
                    comando.CommandType = System.Data.CommandType.Text;
                    comando.Connection = conexion;
                    comando.CommandText = "Insert into ARTICULOS values (@codigo, @nombre, @descripcion, @idmarca, @idcategoria, '', @precio, 1)";
                    comando.Parameters.Clear();
                    comando.Parameters.AddWithValue("@codigo", art.Codigo);
                    comando.Parameters.AddWithValue("@nombre", art.Nombre);
                    comando.Parameters.AddWithValue("@descripcion", art.Descripcion);
                    comando.Parameters.AddWithValue("@idmarca", art.Marca.idMarca);
                    comando.Parameters.AddWithValue("@idcategoria", art.Categ.idCategoria);
                    comando.Parameters.AddWithValue("@precio", art.Precio);


                    comando.Connection = conexion;
                    conexion.Open();
                    comando.ExecuteNonQuery();
                }
                catch (Exception ex)
                {

                    throw ex;
                }
            }

            public void EliminarArticulo(int id)
            {
                SqlCommand comando = new SqlCommand();
                SqlConnection conexion = new SqlConnection();

                int idElimina = id;

                try
                {
                    conexion.ConnectionString = "data source=(local); initial catalog = CATALOGO_DB; Integrated Security=True;";
                    comando.CommandType = System.Data.CommandType.Text;
                    comando.Connection = conexion;
                    comando.CommandText = "UPDATE ARTICULOS SET ESTADO = 0 WHERE ID = @id";
                    comando.Parameters.Clear();
                    comando.Parameters.AddWithValue("@id", idElimina);

                    comando.Connection = conexion;
                    conexion.Open();
                    comando.ExecuteNonQuery();
                }
                catch (Exception ex)
                {

                    throw ex;
                }
                finally
                {
                    conexion.Close();
                }
            }

            public Articulo TraerArticuloEditar(int id)
            {
                List<Articulo> listado = new List<Articulo>();
                SqlCommand comando = new SqlCommand();
                SqlConnection conexion = new SqlConnection();
                SqlDataReader lector;

                Articulo art;

                int idParaEditar = id;
                try
                {
                    conexion.ConnectionString = "data source=(local); initial catalog = CATALOGO_DB; Integrated Security=True;";
                    comando.CommandType = System.Data.CommandType.Text;
                    comando.CommandText = "SELECT A.ID, CODIGO, NOMBRE, A.DESCRIPCION, IDMARCA, B.Descripcion MARCA_DESC, IDCATEGORIA, C.Descripcion CAT_DESC, IMAGEN, PRECIO FROM ARTICULOS A INNER JOIN MARCAS B ON A.IdMarca = B.Id INNER JOIN CATEGORIAS C ON A.IdCategoria = C.Id WHERE a.id = @idEdita";
                    comando.Parameters.Clear();
                    comando.Parameters.AddWithValue("@idEdita", idParaEditar);
                    comando.Connection = conexion;
                    conexion.Open();
                    lector = comando.ExecuteReader();

                    art = new Articulo();
                    while (lector.Read())
                    {

                        art.Id = (int)lector["ID"];
                        art.Codigo = lector["CODIGO"].ToString();
                        art.Nombre = lector["NOMBRE"].ToString();
                        art.Descripcion = lector["DESCRIPCION"].ToString();

                        art.Marca = new Marca();
                        art.Marca.idMarca = (int)lector["IDMARCA"];
                        art.Marca.Descripcion = lector["MARCA_DESC"].ToString();

                        art.Categ = new Categoria();
                        art.Categ.idCategoria = (int)lector["IDCATEGORIA"];
                        art.Categ.Descripcion = lector["CAT_DESC"].ToString();

                        art.Precio = (decimal)lector["PRECIO"];

                        listado.Add(art);

                    }
                    return art;
                }
                catch (Exception ex)
                {

                    throw ex;
                }
            }

            public void EditaArticulo(string a, Articulo arti)
            {
                Articulo art = new Articulo();
                art = arti;
                SqlCommand comando = new SqlCommand();
                SqlConnection conexion = new SqlConnection();

                string codigoM = a;

                try
                {
                    conexion.ConnectionString = "data source=(local); initial catalog = CATALOGO_DB; Integrated Security=True;";
                    comando.CommandType = System.Data.CommandType.Text;
                    comando.Connection = conexion;
                    comando.CommandText = "UPDATE ARTICULOS SET CODIGO = @codigo, NOMBRE = @nombre, DESCRIPCION = @descripcion, IDMARCA = @idmarca, IDCATEGORIA = @idcategoria, PRECIO = @precio WHERE codigo = @codigoM";
                    comando.Parameters.Clear();
                    comando.Parameters.AddWithValue("@codigoM", codigoM);

                    comando.Parameters.AddWithValue("@codigo", art.Codigo);
                    comando.Parameters.AddWithValue("@nombre", art.Nombre);
                    comando.Parameters.AddWithValue("@descripcion", art.Descripcion);
                    comando.Parameters.AddWithValue("@idmarca", art.Marca.idMarca);
                    comando.Parameters.AddWithValue("@idcategoria", art.Categ.idCategoria);
                    comando.Parameters.AddWithValue("@precio", (decimal)art.Precio);

                    comando.Connection = conexion;
                    conexion.Open();
                    comando.ExecuteNonQuery();
                }
                catch (Exception ex)
                {

                    throw ex;
                }
                finally
                {
                    conexion.Close();
                }



            }

        }



    }
}