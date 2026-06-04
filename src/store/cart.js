import { persistentAtom } from '@nanostores/persistent';

export const cartItems = persistentAtom('cart', [], {
  encode: JSON.stringify,
  decode: JSON.parse,
});

export function addToCart(product) {
  const existingItems = cartItems.get();
  const existingItem = existingItems.find(item => item.id === product.id);
  
  if (existingItem) {
    cartItems.set(
      existingItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    cartItems.set([...existingItems, { ...product, quantity: 1 }]);
  }
}

export function removeFromCart(productId) {
  const existingItems = cartItems.get();
  cartItems.set(existingItems.filter(item => item.id !== productId));
}

export function updateQuantity(productId, quantity) {
  const existingItems = cartItems.get();
  if (quantity <= 0) {
    removeFromCart(productId);
    return;
  }
  cartItems.set(
    existingItems.map(item =>
      item.id === productId ? { ...item, quantity } : item
    )
  );
}

export function clearCart() {
  cartItems.set([]);
}
