import { CartSidebar } from "./CartSidebar/CartSidebar";
import { CartContent } from "./CartContent/CartContent";
import { EmptyCart } from "./EmptyCart";
import { FlexBox } from "@/shared/ui/FlexBox";
import { useGetCartQuery } from "@/entities/cart";
import { LoadingCircular } from "@/shared/ui/Loading";

export const ShoppingCartPage = () => {
    const { data, isLoading } = useGetCartQuery();
    const cartItems = data?.cartItems ?? [];

    if (isLoading) {
        return <LoadingCircular />;
    }

    if (cartItems.length === 0) {
        return <EmptyCart />;
    }

    return (
        <FlexBox gap="50px" mt={2}>
            <CartContent />
            <CartSidebar />
        </FlexBox>
    );
};
