class Api::ItemsController < ApplicationController
  before_action :set_menu
  before_action :set_item, only: [:destroy, :update]

  def index 
    render json: @menu.items
  end

  def create
    item = @menu.items.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: @menu.errors }, status: :unprocessable_entity 
    end
  end

  def update
    item = @menu.item.find(params[:id])
    item.update(complete: !item.complete)
    render json: item
  end

  def destroy
    @menu.item.find(params[:id]).destroy
    render json: { message: 'Item deleted' }
  end

  private

  def item_params
    params.require(:item).permit(:name, :price)
  end

  def set_item
    item = Item.find(params[:id])
  end

  def set_menu
    @menu = Menu.find(params[:menu_id])
  end

end
