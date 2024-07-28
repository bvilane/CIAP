"""Add new fields to user model

Revision ID: 80254fa77555
Revises: 7bfebf00a72f
Create Date: 2024-07-28 15:07:51.654920

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.sql import func

# revision identifiers, used by Alembic.
revision = '80254fa77555'
down_revision = '7bfebf00a72f'
branch_labels = None
depends_on = None

def upgrade():
    # Handle duplicates: Append an ID to duplicated emails before setting them unique
    op.execute("""
        UPDATE "user"
        SET email = email || '_' || id::text
        WHERE id IN (
            SELECT id FROM (
                SELECT id, ROW_NUMBER() OVER (PARTITION BY email ORDER BY id) as row_num
                FROM "user"
            ) t
            WHERE t.row_num > 1
        );
    """)
    
    # Continue with adding new columns
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('name', sa.String(length=100), nullable=False, server_default="Unknown"))
        batch_op.add_column(sa.Column('surname', sa.String(length=100), nullable=False, server_default="Unknown"))
        batch_op.add_column(sa.Column('email', sa.String(length=120), nullable=False, server_default="noemail@example.com"))
        batch_op.add_column(sa.Column('country', sa.String(length=100), nullable=False, server_default="South Africa"))
        batch_op.add_column(sa.Column('town', sa.String(length=100), nullable=False, server_default="Soweto"))
        batch_op.add_column(sa.Column('zone', sa.Integer(), nullable=False, server_default="1"))
        batch_op.create_unique_constraint("uq_email", ['email'])

def downgrade():
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint('uq_email', type_='unique')
        batch_op.drop_column('zone')
        batch_op.drop_column('town')
        batch_op.drop_column('country')
        batch_op.drop_column('email')
        batch_op.drop_column('surname')
        batch_op.drop_column('name')

    # ### end Alembic commands ###
