document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.getElementById('closeModal');
    const registerLink = document.getElementById('registerLink');
    const registerModal = document.getElementById('registerModal');
    const closeRegisterModal = document.getElementById('closeRegisterModal');
    const cartIcon = document.getElementById('cartIcon');
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');
    const menuItemsContainer = document.getElementById('menuItems');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const checkoutModal = document.getElementById('checkoutModal');
    const closeCheckoutModal = document.getElementById('closeCheckoutModal');
    const orderSummary = document.getElementById('orderSummary');
    const orderTotal = document.getElementById('orderTotal');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeConfirmationModal = document.getElementById('closeConfirmationModal');
    const orderDetails = document.getElementById('orderDetails');
    const adminPanel = document.getElementById('adminPanel');
    const logoutAdmin = document.getElementById('logoutAdmin');
    const adminTabs = document.querySelectorAll('.admin-tab');
    const adminTabContents = document.querySelectorAll('.admin-tab-content');
    const addMenuItemBtn = document.getElementById('addMenuItem');
    const addItemModal = document.getElementById('addItemModal');
    const closeAddItemModal = document.getElementById('closeAddItemModal');
    const orderNowBtn = document.getElementById('orderNowBtn');

       
  let menuItems = [
    {
        id: 1,
        name: 'Vada Pav',
        description: 'Spicy potato fritter in bun with chutneys',
        price: 30,
        category: 'vadapao',
        image: 'https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d',
        availability: 'available'
    },
    {
        id: 2,
        name: 'Paneer Slice',
        description: 'Delicious paneer slice with spices',
        price: 50,
        category: 'slice',
        image: 'https://example.com/paneer-slice.jpg',
        availability: 'available'
    },
    {
        id: 3,
        name: 'Vegetable Puff',
        description: 'Flaky pastry with vegetable filling',
        price: 25,
        category: 'puff',
        image: 'https://example.com/veg-puff.jpg',
        availability: 'available'
    },
    {
        id: 4,
        name: 'Aloo Paratha',
        description: 'Whole wheat bread stuffed with spiced potatoes',
        price: 40,
        category: 'paratha',
        image: 'https://example.com/aloo-paratha.jpg',
        availability: 'available'
    },
    {
        id: 5,
        name: 'Veg Burger',
        description: 'Burger with veg patty and sauces',
        price: 60,
        category: 'toast-burger',
        image: 'https://example.com/veg-burger.jpg',
        availability: 'available'
    },
    {
        id: 6,
        name: 'Margherita Pizza',
        description: 'Classic pizza with tomato and cheese',
        price: 120,
        category: 'pizza',
        image: 'https://example.com/margherita-pizza.jpg',
        availability: 'available'
    },
    {
        id: 7,
        name: 'Bhel Puri',
        description: 'Puffed rice with vegetables and tangy sauces',
        price: 35,
        category: 'bhell',
        image: 'https://example.com/bhel-puri.jpg',
        availability: 'available'
    },
    {
        id: 8,
        name: 'Masala Maggi',
        description: 'Instant noodles with Indian spices',
        price: 30,
        category: 'maggi',
        image: 'https://example.com/masala-maggi.jpg',
        availability: 'available'
    },
    {
        id: 9,
        name: 'Cold Coffee',
        description: 'Chilled coffee with milk and ice cream',
        price: 60,
        category: 'cold-item',
        image: 'https://example.com/cold-coffee.jpg',
        availability: 'available'
    },
    {
        id: 10,
        name: 'Masala Chai',
        description: 'Spiced Indian tea with milk',
        price: 20,
        category: 'tea-coffee',
        image: 'https://example.com/masala-chai.jpg',
        availability: 'available'
    },
    {
        id: 11,
        name: 'Grilled Sandwich',
        description: 'Sandwich with vegetables and cheese',
        price: 50,
        category: 'sandwich',
        image: 'https://example.com/grilled-sandwich.jpg',
        availability: 'available'
    },
    {
        id: 12,
        name: 'French Fries',
        description: 'Crispy potato fries with seasoning',
        price: 45,
        category: 'frenchfry',
        image: 'https://example.com/french-fries.jpg',
        availability: 'available'
    },
    {
        id: 13,
        name: 'Samosa',
        description: 'Crispy pastry with spiced potato filling',
        price: 25,
        category: 'samosa',
        image: 'https://example.com/samosa.jpg',
        availability: 'available'
    },
    {
        id: 14,
        name: 'Chocolate Shake',
        description: 'Creamy chocolate milkshake',
        price: 70,
        category: 'shakes',
        image: 'https://example.com/chocolate-shake.jpg',
        availability: 'available'
    },
    {
        id: 15,
        name: 'Hakka Noodles',
        description: 'Stir-fried noodles with vegetables',
        price: 80,
        category: 'chinese-item',
        image: 'https://example.com/hakka-noodles.jpg',
        availability: 'available'
    },
    {
         id:16 ,
        name: 'Bombay vadapao',
        description: 'Spicy potato fritter in bun with chutneys',
        price: 40,
        category: 'vadapao',
        image: '',
        availability: 'available'
    },
    {
         id: 17,
        name: 'Mayonnaise Vadapao',
        description: 'Spicy potato fritter in bun with chutneys',
        price: 40,
        category: 'vadapao',
        image: '',
        availability: 'available'
    },
    {
         id: 18,
        name: 'Dabeli',
        description: 'Spicy potato fritter in bun with chutneys',
        price:30 ,
        category: 'vadapao',
        image: '',
        availability: 'available'
    }
];


    let cart = [];
    let orders = [];
    let users = [
        {
            id: 1,
            name: 'Admin User',
            email: 'admin@freshbites.edu',
            username: 'admin',
            password: 'admin123',
            type: 'admin',
            idNumber: 'A1000'
        },
        {
            id: 2,
            name: 'John Doe',
            email: 'john@student.edu',
            username: 'johndoe',
            password: 'student123',
            type: 'student',
            idNumber: 'S2000'
        },
        {
            id: 3,
            name: 'Jane Smith',
            email: 'jane@staff.edu',
            username: 'janesmith',
            password: 'staff123',
            type: 'staff',
            idNumber: 'T3000'
        }
    ];

    let currentUser = null;

    // Initialize the app
    init();

    function init() {
        // Load menu items
        displayMenuItems(menuItems);
        
        // Load admin data if needed
        if (currentUser && currentUser.type === 'admin') {
            loadAdminData();
        }
        
        // Event listeners
        setupEventListeners();
    }

    function setupEventListeners() {
        // Mobile menu toggle
        hamburger.addEventListener('click', toggleMobileMenu);
        
        // Login/Register modals
        loginBtn.addEventListener('click', openLoginModal);
        closeModal.addEventListener('click', closeModalFunc);
        registerLink.addEventListener('click', openRegisterModal);
        closeRegisterModal.addEventListener('click', closeRegisterModalFunc);
        
        // Cart functionality
        cartIcon.addEventListener('click', toggleCart);
        closeCart.addEventListener('click', toggleCart);
        checkoutBtn.addEventListener('click', openCheckoutModal);
        closeCheckoutModal.addEventListener('click', closeCheckoutModalFunc);
        
        // Order confirmation
        closeConfirmationModal.addEventListener('click', closeConfirmationModalFunc);
        
        // Admin panel
        if (logoutAdmin) {
            logoutAdmin.addEventListener('click', logoutAdminFunc);
        }
        
        // Admin tabs
        adminTabs.forEach(tab => {
            tab.addEventListener('click', switchAdminTab);
        });
        
        // Add menu item
        if (addMenuItemBtn) {
            addMenuItemBtn.addEventListener('click', openAddItemModal);
        }
        
        if (closeAddItemModal) {
            closeAddItemModal.addEventListener('click', closeAddItemModalFunc);
        }
        
        // Order now button
        if (orderNowBtn) {
            orderNowBtn.addEventListener('click', scrollToMenu);
        }
        
        // Filter buttons
        filterBtns.forEach(btn => {
            btn.addEventListener('click', filterMenuItems);
        });
        
        // Login form submission
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            loginForm.addEventListener('submit', handleLogin);
        }
        
        // Register form submission
        const registerForm = document.getElementById('registerForm');
        if (registerForm) {
            registerForm.addEventListener('submit', handleRegister);
        }
        
        // Checkout form submission
        const checkoutForm = document.getElementById('checkoutForm');
        if (checkoutForm) {
            checkoutForm.addEventListener('submit', placeOrder);
        }
        
        // Add item form submission
        const addItemForm = document.getElementById('addItemForm');
        if (addItemForm) {
            addItemForm.addEventListener('submit', addNewMenuItem);
        }
        
        // Close modals when clicking outside
        window.addEventListener('click', function(event) {
            if (event.target === loginModal) {
                closeModalFunc();
            }
            if (event.target === registerModal) {
                closeRegisterModalFunc();
            }
            if (event.target === checkoutModal) {
                closeCheckoutModalFunc();
            }
            if (event.target === confirmationModal) {
                closeConfirmationModalFunc();
            }
            if (event.target === addItemModal) {
                closeAddItemModalFunc();
            }
        });
        
        // Scroll event for navbar
        window.addEventListener('scroll', handleScroll);
    }

    // Mobile menu toggle
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    }

    // Modal functions
    function openLoginModal() {
        loginModal.classList.add('active');
    }

    function closeModalFunc() {
        loginModal.classList.remove('active');
    }

    function openRegisterModal(e) {
        e.preventDefault();
        loginModal.classList.remove('active');
        registerModal.classList.add('active');
    }

    function closeRegisterModalFunc() {
        registerModal.classList.remove('active');
    }

    function openCheckoutModal() {
        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        if (!currentUser) {
            openLoginModal();
            return;
        }
        
        updateOrderSummary();
        checkoutModal.classList.add('active');
    }

    function closeCheckoutModalFunc() {
        checkoutModal.classList.remove('active');
    }

    function closeConfirmationModalFunc() {
        confirmationModal.classList.remove('active');
    }

    function openAddItemModal() {
        addItemModal.classList.add('active');
    }

    function closeAddItemModalFunc() {
        addItemModal.classList.remove('active');
    }

    // Cart functions
    function toggleCart() {
        cartSidebar.classList.toggle('active');
    }

    function addToCart(itemId) {
        const item = menuItems.find(item => item.id === itemId);
        
        if (!item) return;
        
        const existingItem = cart.find(cartItem => cartItem.id === itemId);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...item,
                quantity: 1
            });
        }
        
        updateCart();
    }

    function removeFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        updateCart();
    }

    function updateQuantity(itemId, newQuantity) {
        if (newQuantity < 1) {
            removeFromCart(itemId);
            return;
        }
        
        const item = cart.find(item => item.id === itemId);
        if (item) {
            item.quantity = newQuantity;
        }
        
        updateCart();
    }

    function updateCart() {
        // Update cart items display
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
            cartTotal.textContent = '₹0.00';
            document.querySelector('.cart-count').textContent = '0';
            return;
        }
        
        let total = 0;
        let totalItems = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            totalItems += item.quantity;
            
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-title">
                        <span>${item.name}</span>
                        <span class="cart-item-price">₹${item.price.toFixed(2)}</span>
                    </div>
                    <span class="remove-item" data-id="${item.id}">Remove</span>
                    <div class="cart-item-quantity">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <input type="number" class="quantity-value" value="${item.quantity}" min="1" data-id="${item.id}">
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                </div>
            `;
            
            cartItemsContainer.appendChild(cartItemElement);
        });
        
        // Update total
        cartTotal.textContent = `₹${total.toFixed(2)}`;
        document.querySelector('.cart-count').textContent = totalItems;
        
        // Add event listeners to new elements
        document.querySelectorAll('.remove-item').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                removeFromCart(itemId);
            });
        });
        
        document.querySelectorAll('.quantity-btn.minus').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === itemId);
                if (item) {
                    updateQuantity(itemId, item.quantity - 1);
                }
            });
        });
        
        document.querySelectorAll('.quantity-btn.plus').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                const item = cart.find(item => item.id === itemId);
                if (item) {
                    updateQuantity(itemId, item.quantity + 1);
                }
            });
        });
        
        document.querySelectorAll('.quantity-value').forEach(input => {
            input.addEventListener('change', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                const newQuantity = parseInt(this.value) || 1;
                updateQuantity(itemId, newQuantity);
            });
        });
    }

    // Menu functions
    function displayMenuItems(items) {
        menuItemsContainer.innerHTML = '';
        
        if (items.length === 0) {
            menuItemsContainer.innerHTML = '<p class="no-items">No items found in this category</p>';
            return;
        }
        
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = `menu-item ${item.availability === 'unavailable' ? 'unavailable' : ''}`;
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="menu-item-img">
                <div class="menu-item-content">
                    <div class="menu-item-title">
                        <h4>${item.name}</h4>
                        <span class="menu-item-price">₹${item.price.toFixed(2)}</span>
                    </div>
                    <p class="menu-item-desc">${item.description}</p>
                    <div class="menu-item-footer">
                        <span class="menu-item-category">${item.category}</span>
                        <button class="add-to-cart" data-id="${item.id}">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            `;
            
            menuItemsContainer.appendChild(itemElement);
        });
        
        // Add event listeners to add to cart buttons
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                addToCart(itemId);
            });
        });
    }

    function filterMenuItems() {
        // Remove active class from all buttons
        filterBtns.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const category = this.getAttribute('data-category');
        
        if (category === 'all') {
            displayMenuItems(menuItems);
        } else {
            const filteredItems = menuItems.filter(item => item.category === category);
            displayMenuItems(filteredItems);
        }
    }

    // Order functions
    function updateOrderSummary() {
        orderSummary.innerHTML = '';
        
        let total = 0;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            
            const orderItem = document.createElement('div');
            orderItem.className = 'order-summary-item';
            orderItem.innerHTML = `
                <span>${item.name} x ${item.quantity}</span>
                <span>₹${itemTotal.toFixed(2)}</span>
            `;
            
            orderSummary.appendChild(orderItem);
        });
        
        orderTotal.textContent = `₹${total.toFixed(2)}`;
    }

    function placeOrder(e) {
        e.preventDefault();
        
        const pickupTime = document.getElementById('pickupTime').value;
        const specialInstructions = document.getElementById('specialInstructions').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        
        if (!pickupTime) {
            alert('Please select a pickup time');
            return;
        }
        
        const order = {
            id: generateOrderId(),
            userId: currentUser.id,
            items: [...cart],
            pickupTime,
            specialInstructions,
            paymentMethod,
            status: 'pending',
            date: new Date().toISOString(),
            total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
        };
        
        orders.push(order);
        cart = [];
        updateCart();
        closeCheckoutModalFunc();
        showOrderConfirmation(order);
    }

    function generateOrderId() {
        return Math.floor(10000 + Math.random() * 90000);
    }

    function showOrderConfirmation(order) {
        const confirmationMessage = document.getElementById('confirmationMessage');
        confirmationMessage.textContent = `Your order has been placed successfully. Your order number is #${order.id}.`;
        
        orderDetails.innerHTML = '';
        
        const pickupTimeElement = document.createElement('div');
        pickupTimeElement.className = 'order-detail-item';
        pickupTimeElement.innerHTML = `
            <span>Pickup Time:</span>
            <span>${order.pickupTime}</span>
        `;
        orderDetails.appendChild(pickupTimeElement);
        
        const paymentMethodElement = document.createElement('div');
        paymentMethodElement.className = 'order-detail-item';
        paymentMethodElement.innerHTML = `
            <span>Payment Method:</span>
            <span>${formatPaymentMethod(order.paymentMethod)}</span>
        `;
        orderDetails.appendChild(paymentMethodElement);
        
        const totalElement = document.createElement('div');
        totalElement.className = 'order-detail-item';
        totalElement.innerHTML = `
            <span>Total:</span>
            <span>₹${order.total.toFixed(2)}</span>
        `;
        orderDetails.appendChild(totalElement);
        
        confirmationModal.classList.add('active');
    }

    function formatPaymentMethod(method) {
        switch (method) {
            case 'cash': return 'Cash on Pickup';
            case 'card': return 'Card Payment';
            case 'campus': return 'Campus Card';
            default: return method;
        }
    }

    // User authentication functions
    function handleLogin(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userType = document.getElementById('userType').value;
        
        const user = users.find(u => 
            u.username === username && 
            u.password === password && 
            u.type === userType
        );
        
        if (user) {
            currentUser = user;
            closeModalFunc();
            
            if (user.type === 'admin') {
                showAdminPanel();
            } else {
                alert(`Welcome back, ${user.name}!`);
            }
        } else {
            alert('Invalid username, password, or user type');
        }
    }

    function handleRegister(e) {
        e.preventDefault();
        
        const name = document.getElementById('regName').value;
        const email = document.getElementById('regEmail').value;
        const username = document.getElementById('regUsername').value;
        const password = document.getElementById('regPassword').value;
        const userType = document.getElementById('regUserType').value;
        const idNumber = document.getElementById('regId').value;
        
        // Check if username already exists
        const usernameExists = users.some(user => user.username === username);
        
        if (usernameExists) {
            alert('Username already exists. Please choose another one.');
            return;
        }
        
        // Create new user
        const newUser = {
            id: users.length + 1,
            name,
            email,
            username,
            password,
            type: userType,
            idNumber
        };
        
        users.push(newUser);
        currentUser = newUser;
        
        alert('Registration successful! You are now logged in.');
        closeRegisterModalFunc();
    }

    function logoutAdminFunc() {
        currentUser = null;
        adminPanel.classList.remove('active');
    }

    function showAdminPanel() {
        adminPanel.classList.add('active');
        loadAdminData();
    }

    // Admin functions
    function loadAdminData() {
        loadAdminOrders();
        loadAdminMenuItems();
        loadAdminUsers();
    }

    function loadAdminOrders() {
        const adminOrdersContainer = document.getElementById('adminOrders');
        adminOrdersContainer.innerHTML = '';
        
        if (orders.length === 0) {
            adminOrdersContainer.innerHTML = '<p class="no-orders">No orders found</p>';
            return;
        }
        
        // Sort orders by date (newest first)
        const sortedOrders = [...orders].sort((a, b) => new Date(b.date) - new Date(a.date));
        
        sortedOrders.forEach(order => {
            const orderElement = document.createElement('div');
            orderElement.className = 'order-card';
            orderElement.innerHTML = `
                <div class="order-card-header">
                    <span class="order-id">Order #${order.id}</span>
                    <span class="order-status status-${order.status}">${order.status}</span>
                </div>
                <div class="order-details-list">
                    <div class="order-detail">
                        <span>Customer:</span>
                        <span>${getUserName(order.userId)}</span>
                    </div>
                    <div class="order-detail">
                        <span>Items:</span>
                        <span>${order.items.reduce((sum, item) => sum + item.quantity, 0)}</span>
                    </div>
                    <div class="order-detail">
                        <span>Total:</span>
                        <span>₹${order.total.toFixed(2)}</span>
                    </div>
                    <div class="order-detail">
                        <span>Pickup Time:</span>
                        <span>${order.pickupTime}</span>
                    </div>
                </div>
                <div class="order-actions">
                    <button class="order-action-btn complete-btn" data-id="${order.id}">Complete</button>
                    <button class="order-action-btn cancel-btn" data-id="${order.id}">Cancel</button>
                </div>
            `;
            
            adminOrdersContainer.appendChild(orderElement);
        });
        
        // Add event listeners to action buttons
        document.querySelectorAll('.complete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const orderId = parseInt(this.getAttribute('data-id'));
                updateOrderStatus(orderId, 'completed');
            });
        });
        
        document.querySelectorAll('.cancel-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const orderId = parseInt(this.getAttribute('data-id'));
                updateOrderStatus(orderId, 'cancelled');
            });
        });
    }

    function getUserName(userId) {
        const user = users.find(u => u.id === userId);
        return user ? user.name : 'Unknown';
    }

    function updateOrderStatus(orderId, status) {
        const order = orders.find(o => o.id === orderId);
        if (order) {
            order.status = status;
            loadAdminOrders();
        }
    }

    function loadAdminMenuItems() {
        const adminMenuItemsContainer = document.getElementById('adminMenuItems');
        adminMenuItemsContainer.innerHTML = '';
        
        menuItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'admin-menu-item';
            itemElement.innerHTML = `
                <div class="admin-menu-item-header">
                    <span class="admin-menu-item-title">${item.name}</span>
                    <span class="admin-menu-item-price">₹${item.price.toFixed(2)}</span>
                </div>
                <span class="admin-menu-item-category">${item.category}</span>
                <p class="admin-menu-item-desc">${item.description}</p>
                <div class="admin-menu-item-footer">
                    <span class="admin-menu-item-availability ${item.availability}">${item.availability}</span>
                    <div class="admin-menu-item-actions">
                        <button class="edit-item-btn" data-id="${item.id}">Edit</button>
                        <button class="delete-item-btn" data-id="${item.id}">Delete</button>
                    </div>
                </div>
            `;
            
            adminMenuItemsContainer.appendChild(itemElement);
        });
        
        // Add event listeners to action buttons
        document.querySelectorAll('.edit-item-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                editMenuItem(itemId);
            });
        });
        
        document.querySelectorAll('.delete-item-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                deleteMenuItem(itemId);
            });
        });
    }

    function editMenuItem(itemId) {
        // In a real app, this would open an edit form
        alert(`Edit item ${itemId} functionality would go here`);
    }

    function deleteMenuItem(itemId) {
        if (confirm('Are you sure you want to delete this menu item?')) {
            menuItems = menuItems.filter(item => item.id !== itemId);
            loadAdminMenuItems();
            displayMenuItems(menuItems); // Update customer view
        }
    }

    function addNewMenuItem(e) {
        e.preventDefault();
        
        const name = document.getElementById('itemName').value;
        const description = document.getElementById('itemDescription').value;
        const category = document.getElementById('itemCategory').value;
        const price = parseFloat(document.getElementById('itemPrice').value);
        const image = document.getElementById('itemImage').value || 'https://via.placeholder.com/500x300';
        const availability = document.getElementById('itemAvailability').value;
        
        const newItem = {
            id: menuItems.length > 0 ? Math.max(...menuItems.map(item => item.id)) + 1 : 1,
            name,
            description,
            category,
            price,
            image,
            availability
        };
        
        menuItems.push(newItem);
        loadAdminMenuItems();
        displayMenuItems(menuItems); // Update customer view
        closeAddItemModalFunc();
        document.getElementById('addItemForm').reset();
    }

    function loadAdminUsers() {
        const adminUsersContainer = document.getElementById('adminUsers');
        adminUsersContainer.innerHTML = '';
        
        users.forEach(user => {
            const userElement = document.createElement('div');
            userElement.className = 'user-card';
            userElement.innerHTML = `
                <div class="user-card-header">
                    <span class="user-name">${user.name}</span>
                    <span class="user-type type-${user.type}">${user.type}</span>
                </div>
                <div class="user-details">
                    <div class="user-detail">
                        <i class="fas fa-envelope"></i>
                        <span>${user.email}</span>
                    </div>
                    <div class="user-detail">
                        <i class="fas fa-user"></i>
                        <span>${user.username}</span>
                    </div>
                    <div class="user-detail">
                        <i class="fas fa-id-card"></i>
                        <span>${user.idNumber}</span>
                    </div>
                </div>
                <div class="user-actions">
                    ${user.type !== 'admin' ? `<button class="user-action-btn promote-btn" data-id="${user.id}">Promote</button>` : ''}
                    ${user.type !== 'admin' ? `<button class="user-action-btn delete-user-btn" data-id="${user.id}">Delete</button>` : ''}
                </div>
            `;
            
            adminUsersContainer.appendChild(userElement);
        });
        
        // Add event listeners to action buttons
        document.querySelectorAll('.promote-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = parseInt(this.getAttribute('data-id'));
                promoteUser(userId);
            });
        });
        
        document.querySelectorAll('.delete-user-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const userId = parseInt(this.getAttribute('data-id'));
                deleteUser(userId);
            });
        });
    }

    function promoteUser(userId) {
        const user = users.find(u => u.id === userId);
        if (user) {
            user.type = 'admin';
            loadAdminUsers();
        }
    }

    function deleteUser(userId) {
        if (confirm('Are you sure you want to delete this user?')) {
            users = users.filter(u => u.id !== userId);
            loadAdminUsers();
        }
    }

    // Admin tab switching
    function switchAdminTab() {
        // Remove active class from all tabs
        adminTabs.forEach(tab => tab.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Hide all tab contents
        adminTabContents.forEach(content => content.classList.remove('active'));
        
        // Show the selected tab content
        const tabId = this.getAttribute('data-tab');
        document.getElementById(`${tabId}Tab`).classList.add('active');
    }

    // Helper functions
    function scrollToMenu() {
        document.querySelector('#menu').scrollIntoView({
            behavior: 'smooth'
        });
    }

    function handleScroll() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    }

    // Initialize scroll handler
    handleScroll();
});