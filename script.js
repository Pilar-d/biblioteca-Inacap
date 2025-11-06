        // Simulación de login
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simulación de validación (en un caso real, esto se haría en el backend)
            if (username && password) {
                // Ocultar login y mostrar dashboard
                document.getElementById('loginCard').style.display = 'none';
                document.getElementById('dashboard').style.display = 'block';
                
                // Actualizar información del usuario
                document.getElementById('userName').textContent = username;
                document.getElementById('lastAccess').textContent = `Último acceso: ${new Date().toLocaleString()}`;
                
                // Simular diferentes roles según el usuario
                if (username.includes('admin')) {
                    document.getElementById('userRole').textContent = 'Administrador';
                } else if (username.includes('biblio')) {
                    document.getElementById('userRole').textContent = 'Bibliotecario';
                } else {
                    document.getElementById('userRole').textContent = 'Estudiante';
                }
            } else {
                alert('Por favor, complete todos los campos');
            }
        });

        // Función para cerrar sesión
        function logout() {
            document.getElementById('loginCard').style.display = 'block';
            document.getElementById('dashboard').style.display = 'none';
            document.getElementById('loginForm').reset();
        }

        // Simular recordar usuario (usando localStorage)
        document.addEventListener('DOMContentLoaded', function() {
            const rememberedUser = localStorage.getItem('rememberedUser');
            if (rememberedUser) {
                document.getElementById('username').value = rememberedUser;
                document.getElementById('remember').checked = true;
            }
        });

        document.getElementById('remember').addEventListener('change', function() {
            if (this.checked) {
                localStorage.setItem('rememberedUser', document.getElementById('username').value);
            } else {
                localStorage.removeItem('rememberedUser');
            }
        });